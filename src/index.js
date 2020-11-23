/* eslint-disable no-unused-vars */
import { FormioWrapper } from './components/formio-wrapper';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';
import { ReapplySelected } from './scripts/reapply-selected';
import { HelpGuide } from './components/help-guide';
import mainView from './components/partials/help-guide-lb-main';
import initialView from './components/partials/help-guide-lb-initial';
import ingredients from './components/partials/help-guide-lb-ingredient';
import statements from './components/partials/help-guide-lb-statement';
import businessView from './components/partials/help-guide-lb-business';
import storageView from './components/partials/help-guide-lb-storage';
import { configuration } from './config';
import { Environment } from './environment';

(() => {
  const cssReapplier = new ReapplySelected();
  const environment = new Environment();
  configuration.form.location = environment.url;
  // configuration.form.baseLocation = environment.url;

  const lb = new FormioWrapper(configuration);
  const bg = new ButtonGroup(document.querySelector('.button-container'));
  attachStepHandler();
  const hg = new HelpGuide(document.getElementById('help-guide'), {
    views: {
      initial: initialView,
      3: mainView,
      5: businessView,
      7: storageView,
      8: ingredients,
      9: statements,
    },
    initialState: 'onboarding',
    displayOnSteps: [3, 5, 7, 8, 9],
    formWrapper: lb,
  });

  window.addEventListener('DOMContentLoaded', () => {
    /* Remove Squiz default H1 */
    const pageHeader = document.querySelector('#qg-primary-content');
    if (pageHeader) {
      pageHeader.removeChild(document.querySelector('h1'));
    }

    let sectionNav = document.querySelector(
      '#qg-section-nav > ul > li:nth-child(1)',
    );
    if (!sectionNav) {
      sectionNav = document.querySelector('#formnav');
      sectionNav.display = 'block';
    }

    const unorderdList = document.createElement('ol');
    unorderdList.classList = 'lb guide-sub-nav';
    sectionNav.appendChild(unorderdList);
    const sectionNavTarget = sectionNav.querySelector('ol');

    const sectionNavigation = new ButtonGroup(sectionNavTarget, 'navigation');
  });

  window.addEventListener('checkForAutoEmail', (event) => {
    if (event.detail.page === 9) {
      const newEvent = new CustomEvent('formiowrapperSendAdminEmail', {
        bubbles: true,
      });
      window.dispatchEvent(newEvent);
    }
  });

  window.addEventListener('formiowrapperPageChange', (event) => {
    cssReapplier.reapply(['radio']);
  });
})();
