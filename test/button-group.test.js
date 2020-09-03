/* eslint-disable */
const buttonGroup = require('../scripts/button-group.js');

describe('buttonGroup js constructor initialised properly.', function () {
  beforeAll(() => {
    window.Formio = {};
    window.Formio.createForm = new Promise(() => {});
    Formio.wizard = {};
    Formio.wizard.setPage = function () {
      Formio.goneToFirstPage = true;
    };
  });
});

describe('buttonGroup class works as expected.', function () {
  beforeAll(() => {
    window.Formio = {};
    window.Formio.createForm = new Promise(() => {});
    buttonGroup = new ButtonGroup(true);
  });

  it('goToFirstPage fails if not loaded', function () {
    try {
      buttonGroup.goToFirstPage();
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.name).toEqual('Loaded Exception');
    }
  });

  it('goToFirstPage can trigger formIO', function () {
    buttonGroup.loaded = true;
    const result = buttonGroup.goToFirstPage();
    expect(result).toEqual(true);
  });
});
