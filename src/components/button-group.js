import { html, render } from 'lit-html';

export class ButtonGroup {
  constructor(target) {
    this.target = target;

    window.addEventListener('labelbusterPageChange', ({ detail }) => {
      this.updateTarget(detail);
    });
  }

  /**
   * @desc Updates the dom target, side effect.
   * @param {Array} data the event data
   */
  updateTarget(data) {
    render(this.updateButtons(data.buttons), this.target);
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
        but.displayed
      )
    );

    return html`${output}`;
  }

  /**
   * @param {String} text the text on the button
   * @param {String} event the event the clicking the button fires
   * @param {String} cssClass the class string for the buttons display
   * @param {Boolean} disabled is the button disabled
   * @param {Boolean} displayed do we display the button
   * @return {Object}
   */
  generateButton(text, event, cssClass, disabled, displayed) {
    if (!displayed) return html``;
    return html` <button
      class="${cssClass}"
      data-event=${event}
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
    });
    window.dispatchEvent(newEvent);
  }
}
