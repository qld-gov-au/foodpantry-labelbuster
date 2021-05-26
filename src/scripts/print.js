export function printScreen(printableContent, accordianSelector = null){
    if(accordianSelector){
        let expands = document.querySelectorAll(accordianSelector);
        expands.forEach(btn => btn.click());
    }
    let genuineBodyHtml = document.body.innerHTML;
    document.body.innerHTML = printableContent;
    window.print();
    document.body.innerHTML = genuineBodyHtml;
    location.reload();
}
