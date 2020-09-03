/**
 * @returns {void}
 */
function firePageChangeEvent() {
  const event = new CustomEvent('labelbusterPageChange', { bubbles: true });
  window.dispatchEvent(event);
}

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
    this.isTest = test;

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

    window.addEventListener('labelbusterGoToFirstPage', () => {
      this.goToFirstPage();
    });
  }

  /**
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
    firePageChangeEvent();
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
    this.wizard.nextPage().then(() => {
      firePageChangeEvent();
    });
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
    if (!this.wizard._data.termsAndConditions) return false;
    if (this.isTest) {
      return true;
    }
    this.wizard.nextPage().then(() => {
      firePageChangeEvent();
    });
    return true;
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
    this.wizard.prevPage().then(() => {
      firePageChangeEvent();
    });
    return true;
  }

  /**
   * @return {Boolean}
   */
  goToFirstPage() {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (this.isTest) {
      return true;
    }
    if (this.wizard.page !== 0) {
      this.wizard.setPage(0).then(() => {
        firePageChangeEvent();
      });
      return true;
    }

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
};
