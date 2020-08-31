/**
 * @class LabelBuster
 */
class LabelBuster {
  /**
   */
  constructor() {
    this.formLocation =
      'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/formwizard';
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
      this.initialise();
    });
  }

  /**
   * @returns {void}
   */
  initialise() {
    this.formElement = document.querySelector('#formio');
    Formio.createForm(this.formElement, this.formLocation).then(wizard => {
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
    }
    this.wizard.nextPage();
  }

  /**
   * @returns {void}
   */
  acceptEvent() {
    if (this.wizard._data.termsAndConditions) {
      this.wizard.nextPage();
    }
  }

  /**
   * @return {void}
   */
  goToPreviousPage() {
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
}

window.label = new LabelBuster();
