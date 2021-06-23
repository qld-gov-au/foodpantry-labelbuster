export function printScreen(e, sourceSelector) {
  document.querySelector('.btn-print').remove();
  document.querySelector('.help-guide-close').remove();
  document.querySelector('.qg-acc-controls').remove();
  document.querySelectorAll('.arrow').forEach(elem => elem.parentNode.removeChild(elem));
  const contentSource = document.getElementById(sourceSelector);
  const checkboxes = contentSource.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(checkbox => checkbox.setAttribute('checked', true));
  document.body.innerHTML = contentSource.innerHTML;
  window.print();
  window.location.reload();
}
