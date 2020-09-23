/**
 * @class LabelBuster
 */
const formLocation =
  'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/formwizard';

export class LabelBuster {
  /**
   * @param {Boolean} test if we are running a test
   * @param {Number} scrollTarget the numerical target for scroll
   * @returns {void}
   */
  constructor(test = false, scrollTarget = 0) {
    this.formLocation = formLocation;

    // Replace with properties set when using this, same as the form location
    this.buttonCSS = {
      baseClass: 'qg-btn',
      previous: 'btn-default',
      next: 'btn-primary',
      cancel: 'btn-link',
    };

    this.buttonConfig = {
      startOnFirst: true,
      acceptWhenTermsFound: true,
    };

    this.formElement = {};
    this.formSettings = {
      buttonSettings: {
        showCancel: false,
        showPrevious: false,
        showNext: false,
        showSubmit: false,
      },
    };
    this.wizard = {};
    this.loaded = false;
    this.isTest = test;
    this.scrollTaret = scrollTarget;

    window.addEventListener('DOMContentLoaded', () => {
      if (this.isTest) return;
      this.initialise();
    });

    window.addEventListener('labelbusterGoToNext', () => {
      this.goToNextPage();
    });

    window.addEventListener('labelbusterAccept', () => {
      this.acceptEvent();
    });

    window.addEventListener('labelbusterGoToPrevious', () => {
      this.goToPreviousPage();
    });

    window.addEventListener('labelbusterCancel', () => {
      this.goToPage(0);
    });

    window.addEventListener('gotoPage', (event) => {
      this.goToPage(Number(event.detail.page));
    });
  }

  /**
   */
  initialise() {
    this.formElement = document.querySelector('#formio');
    // listens for terms and conditions selection
    this.formElement.addEventListener('click', () => {
      this.firePageChangeEvent();
    });
    Formio.createForm(
      this.formElement,
      this.formLocation,
      this.formSettings,
    ).then((wizard) => {
      this.wizard = wizard;
      this.loaded = true;
      this.wizard.on('initialized', () => {
        this.firePageChangeEvent();
      });
      this.wizard.on('render', () => {
        this.scrollToTop();
        this.firePageChangeEvent();
      });
    });
  }

  /**
   * @returns {void}
   */

  // eslint-ignored here while committing
  firePageChangeEvent() {
    const event = new CustomEvent('formiowrapperPageChange', {
      bubbles: true,
      detail: {
        page: this.wizard && this.wizard.page ? this.wizard.page : 0,
        navigation: this.buildProgressMenuData(),
        hasAccepted: this.hasAccepted(),
        buttons: this.buildButtonData(),
      },
    });
    window.dispatchEvent(event);
  }

  /**
   * @returns {Array} the array of options to distribute
   */
  buildProgressMenuData() {
    const navigationArray = [];
    if (!this.wizard || !this.wizard.components) {
      return navigationArray;
    }
    // this.wizard.setPage(this.wizard.page);
    let invalidPreviousStep = false;
    this.wizard.components.forEach((page, offset) => {
      const isValid = this.checkPageValidity(
        offset,
        this.wizard.components,
        this.wizard.data,
      );

      const outputObject = {
        cssClass: 'qg-btn btn-link',
        step: offset + 1,
        label: page.component.title,
        destination: offset,
        disabled: invalidPreviousStep,
        visited: this.wizard._seenPages.indexOf(offset) !== -1,
        active: offset === this.wizard.page,
      };
      if (!isValid) {
        invalidPreviousStep = true;
      }
      navigationArray.push(outputObject);
    });
    return navigationArray;
  }

  /**
   * @return {Array} the button data array
   */
  buildButtonData() {
    const { page } = this.wizard;
    const { pages } = this.wizard;
    const { data } = this.wizard;

    const previousButton = {
      title: 'Previous',
      event: 'labelbusterGoToPrevious',
      cssClass: `${this.buttonCSS.baseClass} ${this.buttonCSS.previous}`,
      disabled: !this.checkPageValidity(page - 1, pages, data),
      displayed: true,
    };

    const nextButton = {
      title: 'Next',
      event: 'labelbusterGoToNext',
      cssClass: `${this.buttonCSS.baseClass} ${this.buttonCSS.next}`,
      disabled: !this.checkPageValidity(page, pages, data),
      displayed: true,
    };

    const cancelButton = {
      title: 'Cancel',
      event: 'labelbusterCancel',
      cssClass: `${this.buttonCSS.baseClass} ${this.buttonCSS.cancel}`,
      disabled: false,
      displayed: true,
    };

    if (page === 0) {
      previousButton.displayed = false;
      cancelButton.displayed = false;
      if (this.buttonConfig.startOnFirst) {
        nextButton.title = 'Start';
      }
    }

    if (page === this.wizard.pages.length - 1) {
      nextButton.displayed = false;
    }

    const currentPageTitle = this.wizard.pages[this.wizard.page].component
      .title;
    if (currentPageTitle.toLowerCase().includes('terms')) {
      nextButton.title = 'Accept';
      nextButton.disabled = !this.checkPageValidity(page, pages, data);
    }

    return [previousButton, nextButton, cancelButton];
  }

  /**
   * @param {Number} offset the offset in the page array
   * @param {Object} pages the details about the page
   * @param {Object} data the data entered by the user
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  checkPageValidity(offset, pages, data) {
    if (offset < 0) return false;
    return pages[offset].checkValidity(data);
  }

  /**
   * @return {Boolean}
   */
  goToNextPage() {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (this.isTest) {
      return true;
    }
    this.wizard.nextPage();
    return true;
  }

  /**
   * @return {Boolean}
   */
  acceptEvent() {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (!this.hasAccepted()) return false;
    if (this.isTest) {
      return true;
    }
    this.wizard.nextPage();
    return true;
  }

  /**
   * @return {Boolean}
   */
  hasAccepted() {
    if (this.wizard && this.wizard._data) {
      return this.checkPageValidity(
        this.wizard.page,
        this.wizard.components,
        this.wizard.data,
      );
    }
    return false;
  }

  /**
   * @return {Boolean}
   */
  goToPreviousPage() {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (this.isTest) {
      return true;
    }
    this.wizard.prevPage();
    return true;
  }

  /**
   * @param {Number} pageNo the page number provided by the wizard instance
   * @return {Boolean}
   */
  goToPage(pageNo) {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (this.isTest) {
      return true;
    }
    this.wizard.setPage(pageNo);
    return true;
  }

  /**
   */
  notLoaded() {
    const errorObject = {
      element: this.formElement,
      loaded: this.loaded,
      settings: this.settings,
      name: 'Loaded Exception',
      message: 'FormIO not properly loaded',
    };

    throw errorObject;
  }

  /**
   */
  scrollToTop() {
    window.scroll({
      top: this.scrollTaret,
      behavior: 'smooth',
    });
  }
}

window.label = new LabelBuster();
