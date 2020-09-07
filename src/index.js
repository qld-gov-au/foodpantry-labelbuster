/* eslint-disable no-unused-vars */
import { LabelBuster } from './components/label-buster';
import { ButtonGroup } from './components/button-group';

(() => {
  const lb = new LabelBuster();
  const bg = new ButtonGroup(document.querySelector('.button-container'));

  /* Remove Squiz default H1 */
  window.addEventListener('DOMContentLoaded', () => {
    const pageHeader = document.querySelector('#qg-primary-content');
    if (pageHeader) {
      pageHeader.removeChild(document.querySelector('h1'));
    }
  });
})();
