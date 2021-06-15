export function printScreen(e, sourceSelector, accordianSelector = null) {
  document.querySelector(".btn-print").remove();
  document.querySelector(".help-guide-close").remove();
  if (accordianSelector) {
    const expands = document.querySelectorAll(accordianSelector);
    expands.forEach(btn => btn.click());
  }
  setTimeout(() => {
    const contentSource = document.getElementById(sourceSelector);
    document.body.innerHTML = contentSource.innerHTML;
    window.print();
    window.location.reload();
  }, 2000);
}
