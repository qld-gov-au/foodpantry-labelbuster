import { html, render } from 'lit-html';
/**
 * @class HelpGuide
 */
// eslint-disable-next-line no-unused-vars
export class HelpGuide {
  /**
   * @param {HTMLElement} target the target for the help guide
   * @param {Object} views an object containing partial views for template
   */
  constructor(target, views) {
    this.target = target;
    this.views = views;
    this.state = {
      firstView: true,
      open: true,
    };
    this.render(this.state);

    window.addEventListener('labelbusterPageChange', () => {
      this.render(this.state);
    });

    window.addEventListener('helpGuideAccordion', ({ detail: { id } }) => {
      this._openAccordionItem(id);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _openAccordionItem(itemID) {
    const accordionItem = document.getElementById(itemID);
    accordionItem.checked = true;
  }

  _closeButton() {
    return html`
      <button
        class="btn btn-link"
        @click=${() => this.updateTemplate({ open: false })}
      >
        Hide ->
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _overlay() {
    return html`<div class="overlay"></div>`;
  }

  // CLOSED STATE
  _callout() {
    return html`
      <button
        class="help-guide-callout"
        @click=${() => this.updateTemplate({ open: true })}
      >
        <i class="fa fa-book"></i>
        <span>Help guide</span>
      </button>
    `;
  }

  updateTemplate(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render(this.state);
  }

  createTemplate(state) {
    return html`
      ${!state.open ? this._callout() : ''}
      ${state.firstView ? this._overlay() : ''}
      <div
        class=${state.open
          ? 'help-guide-content open-menu'
          : 'help-guide-content close-menu'}
      >
        <div class="top-block">
          <div class="side-padding">
            <i class="fa fa-book"></i>
            <h3>Help guide</h3>
          </div>
          ${!state.firstView ? this._closeButton() : ''}
        </div>
        ${state.firstView
          ? this.views.initial(() => this.updateTemplate({ firstView: false }))
          : this.views.main()}
      </div>
    `;
  }

  render() {
    render(this.createTemplate(this.state), this.target);
  }
}
