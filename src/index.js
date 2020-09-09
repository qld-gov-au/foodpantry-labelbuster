/* eslint-disable no-unused-vars */
import { LabelBuster } from './components/label-buster';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';

(() => {
  const lb = new LabelBuster();
  const bg = new ButtonGroup(document.querySelector('.button-container'));
  attachStepHandler();

  window.addEventListener('DOMContentLoaded', () => {
    /* Remove Squiz default H1 */
    const pageHeader = document.querySelector('#qg-primary-content');
    if (pageHeader) {
      pageHeader.removeChild(document.querySelector('h1'));
    }
  });
})();
