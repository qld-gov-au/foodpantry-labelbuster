/**
 * @class LabelBuster
 */
const formLocation =
  'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/formwizard';
module.exports = class LabelBuster {
  /**
   * @param {Boolean} test if we are running a test
   * @returns {void}
   */
  constructor(test = false) {
    this.formLocation = formLocation;
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

    window.addEventListener('DOMContentLoaded', () => {
      if (test) return;
      this.initialise();
    });
  }

  /**
   * @returns {void}
   */
  initialise() {
    this.formElement = document.querySelector('#formio');
    Formio.createForm(
      this.formElement,
      this.formLocation,
      this.formSettings
    ).then(wizard => {
      this.wizard = wizard;
      this.loaded = true;
    });
  }

  /**
   * @returns {void}
   */
  goToNextPage() {
    if (!this.loaded) {
      this.notLoaded();
      return;
    }
    this.wizard.nextPage();
  }

  /**
   * @returns {void}
   */
  acceptEvent() {
    if (!this.loaded) {
      this.notLoaded();
      return;
    }
    if (this.wizard._data.termsAndConditions) {
      this.wizard.nextPage();
    }
  }

  /**
   * @return {void}
   */
  goToPreviousPage() {
    if (!this.loaded) {
      this.notLoaded();
      return;
    }
    this.wizard.prevPage();
  }

  /**
   * @returns {void}
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
};
