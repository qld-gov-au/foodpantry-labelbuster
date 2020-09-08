import attachExpandCollapse from './collapse-expand';

export default () => {
  window.addEventListener('labelbusterPageChange', ({ detail: { page } }) => {
    if (page === 2) {
      attachExpandCollapse();
    }
  });
};
