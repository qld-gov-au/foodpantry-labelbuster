/* eslint-disable no-unused-vars */
import { LabelBuster } from './components/label-buster';
import { SectionNavigation } from './components/section-navigation';
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

    let sectionNav = document.querySelector('#qg-section-nav');
    if (!sectionNav) {
      sectionNav = document.querySelector('#formnav');
      sectionNav.display = 'block';
    }
    const sectionNavTarget = sectionNav.querySelector('ul');
    const sectionNavigation = new SectionNavigation(sectionNavTarget);
  });
})();
