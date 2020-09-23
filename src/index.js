/* eslint-disable no-unused-vars */
import { LabelBuster } from './components/label-buster';
import { SectionNavigation } from './components/section-navigation';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';
import { HelpGuide } from './components/help-guide';

(() => {
  const lb = new LabelBuster();
  const bg = new ButtonGroup(document.querySelector('.button-container'));
  attachStepHandler();
  const hg = new HelpGuide(document.getElementById('help-guide'));

  window.addEventListener('DOMContentLoaded', () => {
    /* Remove Squiz default H1 */
    const pageHeader = document.querySelector('#qg-primary-content');
    if (pageHeader) {
      pageHeader.removeChild(document.querySelector('h1'));
    }

    let sectionNav = document.querySelector(
      '#qg-section-nav > ul > li:nth-child(1)'
    );
    if (!sectionNav) {
      sectionNav = document.querySelector('#formnav');
      sectionNav.display = 'block';
    }

    const unorderdList = document.createElement('ul');
    unorderdList.classList = 'lb';
    sectionNav.appendChild(unorderdList);
    const sectionNavTarget = sectionNav.querySelector('ul');

    const sectionNavigation = new SectionNavigation(sectionNavTarget);
  });
})();
