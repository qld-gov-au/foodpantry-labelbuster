/* eslint-disable no-unused-vars */
import { FormioWrapper } from './components/formio-wrapper';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';
import { HelpGuide } from './components/help-guide';
import mainView from './components/partials/help-guide-lb-main';
import initialView from './components/partials/help-guide-lb-initial';

(() => {
  const configuration = {
    formLocation:
      'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/formwizard',
    formSettings: {
      buttonSettings: {
        showCancel: false,
        showPrevious: false,
        showNext: false,
        showSubmit: false,
      },
    },
    buttonCSS: {
      baseClass: 'qg-btn',
      previous: 'btn-default',
      next: 'btn-primary',
      cancel: 'btn-link',
    },
    scrollTarget: 0,
    buttonConfig: {
      startOnFirst: true,
      acceptWhenTermsFound: true,
    },
    navigationCSS: {
      baseClass: 'qg-btn btn-link',
    },
  };

  const lb = new FormioWrapper(configuration);
  const bg = new ButtonGroup(document.querySelector('.button-container'));
  attachStepHandler();
  const hg = new HelpGuide(document.getElementById('help-guide'), {
    main: mainView,
    initial: initialView,
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
