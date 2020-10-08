/* global $ */
import { html, render } from 'lit-html';
/**
 * @class HelpGuide
 */
// eslint-disable-next-line no-unused-vars
export class HelpGuide {
  /**
   * @param {HTMLElement} target the target for the help guide
   * @param {Object} config an object containing views and initialState setting of menu
   */
  constructor(target, config) {
    this.target = target;
    this.views = config.views;
    this.initialState = config.initialState;
    if (this.initialState === 'minimized') {
      this._setState({
        firstView: false,
        open: false,
      });
    } else if (this.initialState === 'active') {
      this._setState({
        firstView: false,
        open: true,
      });
    } else {
      this._setState({
        firstView: true,
        open: true,
      });
    }
    this.render(this.state);

    window.addEventListener('formiowrapperPageChange', ({ detail }) => {
      this.updateTemplate(detail);
    });

    // eslint-disable-next-line no-shadow
    document.querySelector('.lb').addEventListener('click', ({ target }) => {
      if (target.classList.contains('accordion-btn')) {
        this.returnTab = target;
        const itemID = target.dataset.accordionItem;
        const isOpen = this.state.open;
        if (!this.state.open) {
          this.updateTemplate({ open: true });
        }

        setTimeout(() => {
          this._openAccordionItem(itemID, isOpen);
        }, 500);
      }
    });
  }

  _setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _openAccordionItem(itemID, isOpen) {
    const accordionItem = document.getElementById(itemID);
    const accordionArticle = accordionItem.parentElement;
    if (accordionItem.checked && isOpen) {
      return;
    }
    accordionItem.checked = true;
    // SWE JQuery
    $('.help-guide-content').animate(
      {
        scrollTop: $(`#${itemID}`).offset().top,
      },
      1000,
    );
    const focusable = accordionArticle.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    firstFocusable.focus();

    const keyboardTrap = (e) => {
      if (e.target === lastFocusable) {
        e.preventDefault();
        this.updateTemplate({ open: false });
        this.returnTab.focus();
        document.removeEventListener('keydown', keyboardTrap);
      }
    };
    document.addEventListener('keydown', keyboardTrap);
  }

  _closeButton() {
    return html`
      <button
        class="btn btn-link"
        @click=${() => this.updateTemplate({ open: false })}
      >
        Hide <i class="fa fa-arrow-right"></i>
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _overlay(isVisible) {
    return html`<div class="overlay ${isVisible ? 'visible' : 'hide'}"></div>`;
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
    this._setState(newState);
    this.render(this.state);
  }

  createTemplate(state) {
    return html`
      ${!state.open ? this._callout() : ''}
      ${state.open ? this._overlay(state.firstView) : ''}
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
