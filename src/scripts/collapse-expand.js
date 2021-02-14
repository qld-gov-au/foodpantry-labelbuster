/**
 * @param {Event} e the event on click
 * @param {Boolean} newState expand or collapse state
 */
export function modifyAccordionState(e, newState) {
  // composedPath is not SUPPORTED IN IE11
  // const accordionSection = e
  //   .composedPath()
  //   .find(element => element.classList.contains('qg-accordion'));
  const qgAccordion = e.target.closest('.qg-accordion');
  const articles = qgAccordion.querySelectorAll(
    '.qg-accordion article input[type="checkbox"]',
  );
  articles.forEach((article) => {
    // eslint-disable-next-line no-param-reassign
    article.checked = newState;
  });
}

/**
 * @param {HTMLElement} accordionSection html section
 */
export const addExpandCollapse = (accordionSection) => {
  const collapse = accordionSection.querySelector('label[for="collapse"]');
  const expand = accordionSection.querySelector('label[for="expand"]');
  expand.addEventListener('click', e => modifyAccordionState(e, true));
  collapse.addEventListener('click', e => modifyAccordionState(e, false));
};
