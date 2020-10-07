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
    if (config.formWrapper) {
      this.formWrapper = config.formWrapper;
      this.displayOnSteps = new Map();
      config.displayOnSteps.forEach((step) =>
        this.displayOnSteps.set(step, true),
      );
    }
    this.initialState = localStorage.getItem('help-guide')
      ? 'active'
      : config.initialState;

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

    this.updateTemplate();
    // has seen help guide
    localStorage.setItem('help-guide', true);
    window.addEventListener('formiowrapperPageChange', ({ detail }) => {
      this.updateTemplate(detail);
    });

    // eslint-disable-next-line no-shadow
    document.querySelector('.lb').addEventListener('click', ({ target }) => {
      if (target.classList.contains('accordion-btn')) {
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
    if (newState) {
      this._setState(newState);
    }
    if (this.displayOnSteps.has(this.formWrapper.wizard.page)) {
      this.render(this.state);
    } else {
      this.render(null);
    }
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

  render(state) {
    render(state ? this.createTemplate(state) : null, this.target);
  }
}
