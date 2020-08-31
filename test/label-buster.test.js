/* eslint-disable */
const LabelBuster = require('../scripts/label-buster');

describe('Label buster js constructor initialised properly.', function () {
  beforeAll(() => {
    window.Formio = {};
    window.Formio.createForm = new Promise(() => {});
    Formio.wizard = {};
    Formio.wizard.nextPage = function () {
      Formio.goneNext = true;
    };
    Formio.wizard.prevPage = function () {
      Formio.gonePrevious = true;
    };
    Formio._data = {};
    Formio._data.termsAndConditions = false;
  });

  const labelBuster = new LabelBuster(true);
  it('formSettings has button settings', function () {
    expect(labelBuster.formSettings).toBeDefined();
  });

  it('formSetttings has buttons settings', function () {
    expect(labelBuster.formSettings.buttonSettings).toBeDefined();
  });

  it('button settings has showCancel and its false', function () {
    expect(labelBuster.formSettings.buttonSettings.showCancel).toBeDefined();
    expect(labelBuster.formSettings.buttonSettings.showCancel).toEqual(false);
  });

  it('button settings has showPrevious and its false', function () {
    expect(labelBuster.formSettings.buttonSettings.showPrevious).toBeDefined();
    expect(labelBuster.formSettings.buttonSettings.showPrevious).toEqual(false);
  });

  it('button settings has showNext and its false', function () {
    expect(labelBuster.formSettings.buttonSettings.showNext).toBeDefined();
    expect(labelBuster.formSettings.buttonSettings.showNext).toEqual(false);
  });

  it('button settings has showSubmit and its false', function () {
    expect(labelBuster.formSettings.buttonSettings.showSubmit).toBeDefined();
    expect(labelBuster.formSettings.buttonSettings.showSubmit).toEqual(false);
  });
});

describe('Label buster class works as expected.', function () {
  beforeAll(() => {
    window.Formio = {};
    window.Formio.createForm = new Promise(() => {});
    labelBuster = new LabelBuster(true);
    labelBuster.goneNext = false;
    labelBuster.gonePrevious = false;

    labelBuster.wizard = {};
    labelBuster.wizard.nextPage = function () {
      labelBuster.goneNext = true;
    };
    labelBuster.wizard.prevPage = function () {
      labelBuster.gonePrevious = true;
    };
    labelBuster.wizard._data = {};
    labelBuster.wizard._data.termsAndConditions = false;
  });

  it('goToNextPage fails if not loaded', function () {
    try {
      labelBuster.goToNextPage();
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.name).toEqual('Loaded Exception');
    }
  });

  it('goToNextPage runs the function on Formio expected', function () {
    labelBuster.loaded = true;
    labelBuster.goToNextPage();
    expect(labelBuster.goneNext).toEqual(true);
  });

  it('goToPreviousPage fails if not loaded', function () {
    try {
      labelBuster.goToPreviousPage();
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.name).toEqual('Loaded Exception');
    }
  });

  it('goToPreviousPage runs the function on Formio expected', function () {
    labelBuster.loaded = true;
    labelBuster.goToPreviousPage();
    expect(labelBuster.gonePrevious).toEqual(true);
  });

  it('acceptEvent fails if not loaded', function () {
    try {
      labelBuster.acceptEvent();
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.name).toEqual('Loaded Exception');
    }
  });

  it('acceptEvent runs the function on Formio expected, but fail', function () {
    labelBuster.loaded = true;
    labelBuster.wizard._data.termsAndConditions = false;
    labelBuster.goneNext = false;
    labelBuster.acceptEvent();
    expect(labelBuster.goneNext).toEqual(false);
  });

  it('acceptEvent runs the function on Formio expected, but succeed cause accepted', function () {
    labelBuster.loaded = true;
    labelBuster.wizard._data.termsAndConditions = true;
    labelBuster.acceptEvent();
    expect(labelBuster.goneNext).toEqual(true);
  });
});
