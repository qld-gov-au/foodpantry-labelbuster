export default function browserDetails() {
    const ua = navigator.userAgent;
    let tem;
    let matchBrowser = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matchBrowser[1])){
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {name:'IE',version:(tem[1]||'')};
    }
    if (matchBrowser[1] === 'Chrome'){
      tem = ua.match(/\bOPR|Edge\/(\d+)/)
      if(tem!=null)   {return {name:'Edge', version:tem[1]};}
    }

    matchBrowser = matchBrowser[2]? [matchBrowser[1], matchBrowser[2]]: [navigator.appName, navigator.appVersion, '-?'];
    tem = ua.match(/version\/(\d+)/i)
    if (tem != null) { matchBrowser.splice(1,1,tem[1]); }
    return {
      name: matchBrowser[0],
      version: matchBrowser[1]
    };
};
