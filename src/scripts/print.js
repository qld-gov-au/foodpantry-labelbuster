export function printScreen(e, printableContent, accordianSelector = null) {
  if (accordianSelector) {
    const expands = document.querySelectorAll(accordianSelector);
    expands.forEach(btn => btn.click());
  }
  const genuineBodyHtml = document.body.innerHTML;
  document.body.innerHTML = printableContent;
  window.print();
  document.body.innerHTML = genuineBodyHtml;
  window.location.reload();
}
