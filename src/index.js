/* eslint-disable no-unused-vars */
import { FormioWrapper } from './components/formio-wrapper';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';
import { HelpGuide } from './components/help-guide';
import mainView from './components/partials/help-guide-lb-main';
import initialView from './components/partials/help-guide-lb-initial';
import ingredients from './components/partials/help-guide-lb-ingredient';
import businessView from './components/partials/help-guide-lb-business';
import { configuration } from './config';
import { Environment } from './environment';

(() => {
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
      8: ingredients,
    },
    initialState: 'onboarding',
    displayOnSteps: [3, 5, 8],
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
})();
