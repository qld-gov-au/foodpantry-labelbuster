import attachExpandCollapse from './collapse-expand';

export default () => {
  window.addEventListener('formiowrapperPageChange', ({ detail: { page } }) => {
    if (page === 2) {
      attachExpandCollapse();
    }
  });
};
