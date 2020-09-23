import { html, render } from 'lit-html';

export class ButtonGroup {
  constructor(target, data = 'buttons') {
    this.target = target;
    this.data = data;

    window.addEventListener('formiowrapperPageChange', ({ detail }) => {
      this.updateTarget(detail);
    });
  }

  /**
   * @desc Updates the dom target, side effect.
   * @param {Array} data the event data
   */
  updateTarget(data) {
    render(this.updateButtons(data[this.data]), this.target);
  }

  /**
   * @param {Object} data the current page
   * @return {Object}
   */
  updateButtons(data) {
    const output = data.map((but) =>
      this.generateButton(
        but.title,
        but.event,
        but.cssClass,
        but.disabled,
        but.displayed,
        but.detail,
      ),
    );

    return html`${output}`;
  }

  /**
   * @param {String} text the text on the button
   * @param {String} event the event the clicking the button fires
   * @param {String} cssClass the class string for the buttons display
   * @param {Boolean} disabled is the button disabled
   * @param {Boolean} displayed do we display the button
   * @param {Object} detail detail object to pass through
   * @return {Object}
   */
  generateButton(text, event, cssClass, disabled, displayed, detail) {
    if (!displayed) return html``;
    return html` <button
      class="${cssClass}"
      data-event=${event}
      data-detail=${JSON.stringify(detail)}
      @click=${this.fireEvent}
      ?disabled=${disabled}
    >
      ${text}
    </button>`;
  }

  /**
   * @param {Object} event the event
   */
  // eslint-disable-next-line class-methods-use-this
  fireEvent(event) {
    const newEvent = new CustomEvent(event.target.dataset.event, {
      bubbles: true,
      detail: JSON.parse(event.target.dataset.detail),
    });
    window.dispatchEvent(newEvent);
  }
}
