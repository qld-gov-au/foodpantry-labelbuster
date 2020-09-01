function modifyAllCheckbox(newState) {
  const accordionArticles = document.querySelectorAll(
    '.qg-accordion article input[type="checkbox"]'
  );
  accordionArticles.forEach(article => {
    // eslint-disable-next-line no-param-reassign
    article.checked = newState;
  });
}

const collapse = document.querySelector('label[for="collapse"]');
const expand = document.querySelector('label[for="expand"]');

collapse.addEventListener('click', () => {
  modifyAllCheckbox(false);
});

expand.addEventListener('click', () => {
  modifyAllCheckbox(true);
});
