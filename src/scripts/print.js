export function printScreen(printableContent){
    let genuineBodyHtml = document.body.innerHTML;
    document.body.innerHTML = printableContent;
    window.print();
    document.body.innerHTML = genuineBodyHtml;
    location.reload();
}
