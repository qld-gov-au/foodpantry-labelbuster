/**
 * @param {Boolean} newState checked or not checked
 */
function modifyAllCheckbox(newState) {
  const accordionArticles = document.querySelectorAll(
    '.qg-accordion article input[type="checkbox"]'
  );
  accordionArticles.forEach(article => {
    // eslint-disable-next-line no-param-reassign
    article.checked = newState;
  });
}
// Remove before production!
window.addEventListener(
  'labelbusterPageChange',
  () => {
    const collapse = document.querySelector('label[for="collapse"]');
    const expand = document.querySelector('label[for="expand"]');
    if (collapse) {
      collapse.addEventListener('click', () => {
        modifyAllCheckbox(false);
      });
    }

    if (expand) {
      expand.addEventListener('click', () => {
        modifyAllCheckbox(true);
      });
    }
  },
  false
);
