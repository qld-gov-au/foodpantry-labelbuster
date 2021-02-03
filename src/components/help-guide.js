/* eslint-disable no-nested-ternary */
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
    // for open accordion item animation
    this.target = target;
    this.views = config.views;
    this.shouldAnimate = true;
    if (config.formWrapper) {
      this.formWrapper = config.formWrapper;
      this.displayOnSteps = new Map();
      config.displayOnSteps.forEach(step => this.displayOnSteps.set(step, true));
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
    this._initAccordionButtons();
    // has seen help guide
    localStorage.setItem('help-guide', true);
    window.addEventListener('formiowrapperPageChange', () => {
      this.updateTemplate();
    });
    window.addEventListener('formioNewPageRender', () =>
      this.updateTemplate({ open: this._isMobileSite() })
    );

    // eslint-disable-next-line no-shadow
    document.body.addEventListener('click', ({ target }) => {
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
  _isMobileSite() {
    return !(window.innerWidth <= 991);
  }

  // eslint-disable-next-line class-methods-use-this
  _openAccordionItem(itemID, isOpen) {
    const accordionItem = document.getElementById(itemID);
    this.activeAccordion = accordionItem.parentElement;
    this._addKeyboardTrap();
    if (accordionItem.checked && isOpen) {
      return;
    }
    const articles = document.querySelectorAll(
      '.help-guide-content .qg-accordion article input[type="checkbox"]',
    );
    articles.forEach((article) => {
      // eslint-disable-next-line no-param-reassign
      article.checked = false;
    });

    accordionItem.checked = true;

    document.querySelector(`#${itemID}`).scrollIntoView({ 
      behavior: 'smooth',
    });
  }

  _addKeyboardTrap() {
    const focusableElements = this.activeAccordion.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstItem = focusableElements[0];
    const lastItem = focusableElements[focusableElements.length - 1];

    firstItem.focus();

    const keyboardTrap = (e) => {
      const isFocusedInAccordion = Array.from(focusableElements).some(
        element => element === e.target,
      );

      if (e.target === lastItem) {
        e.preventDefault();
        this.updateTemplate({ open: false });
        this.returnTab.focus();
      }

      if (e.target === lastItem || !isFocusedInAccordion) {
        document.removeEventListener('keydown', keyboardTrap);
      }
    };
    document.addEventListener('keydown', keyboardTrap);
  }

  // eslint-disable-next-line class-methods-use-this
  _initAccordionButtons() {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.className === 'acc-heading') {
        target.querySelector('label').control.checked = !target.querySelector('label').control.checked;
      }
    });
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
    return html`<div
      class="overlay ${isVisible ? 'visible' : 'hide'}"
      @click=${!this.state.firstView ? () => this.updateTemplate({ open: false }) : ''}
    >
    </div>`;
  }

  // CLOSED STATE
  _callout() {
    return html`
      <button
        class="help-guide-callout"
        @click=${() => {
    this.updateTemplate({ open: true });
    const expandButton = document.querySelector('#help-guide #expand');
    expandButton.focus();
  }}
      >
        <i class="fa fa-book"></i>
        <span>Help guide</span>
      </button>
    `;
  }

  updateTemplate(newState) {
    if (newState) {
      this.shouldAnimate = true;
      this._setState(newState);
    }
    if (this.displayOnSteps.has(this.formWrapper.wizard.page)) {
      this.render(this.state);
      this.shouldAnimate = false;
    } else {
      this.render(null);
    }
    if (this.state.firstView) {
      const gotItButton = document.querySelector('#gotHelpGuide');
      if (gotItButton) {
        const keyboardTrap = (e) => {
          e.preventDefault();
          if (e.code === "Enter" && e.target === gotItButton) {
            gotItButton.click();
          } else {
            gotItButton.focus();
          }
        }

        gotItButton.addEventListener('click', () => {
          document.querySelector('#focusTarget').focus();
          document.removeEventListener('keydown', keyboardTrap);
          this.updateTemplate({ open: this._isMobileSite() });
        });

        document.addEventListener('keydown', keyboardTrap);
        gotItButton.focus();
      }
    }
  }

  createTemplate(state) {
    if (!state) return null;
    return html`
      ${!state.open ? this._callout() : ''}
      ${state.open ? this._overlay(state.firstView) : ''}
      <div
        class=${`help-guide-content ${
    this.shouldAnimate ? (state.open ? 'open-menu' : 'close-menu') : ''
  } ${!state.open && !this.shouldAnimate ? 'hide' : ''}`}
      >
        <div class="top-block">
          <div class="side-padding">
            <i class="fa fa-book"></i>
            <h2>Help guide</h2>
          </div>
          ${!state.firstView ? this._closeButton() : ''}
        </div>
        ${state.firstView
    ? this.views.initial(() => this.updateTemplate({ firstView: false }))
    : this.views[this.formWrapper.wizard.page]()}
      </div>
    `;
  }

  render(state) {
    const templateResult = state ? this.createTemplate(state) : null;
    render(templateResult, this.target);
    return templateResult;
  }
}
