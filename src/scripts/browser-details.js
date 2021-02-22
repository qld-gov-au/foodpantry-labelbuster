export default function browserDetails() {
    const navigatorUserAgent = navigator.userAgent;
    let predictVersion;
    let matchBrowser = navigatorUserAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(matchBrowser[1])){
      predictVersion = /\brv[ :]+(\d+)/g.exec(navigatorUserAgent) || [];
      return {name:'IE',version:(predictVersion[1]||'')};
    }
    if (matchBrowser[1] === 'Chrome'){
      predictVersion = navigatorUserAgent.match(/\bOPR|Edge\/(\d+)/)
      if(predictVersion != null)   { return { name:'Edge', version:predictVersion[1]}; }
    }
    matchBrowser = matchBrowser[2]? [matchBrowser[1], matchBrowser[2]]: [navigator.appName, navigator.appVersion, '-?'];
    predictVersion = navigatorUserAgent.match(/version\/(\d+)/i)
    if (predictVersion != null) { matchBrowser.splice(1,1,predictVersion[1]); }
    return {
      name: matchBrowser[0],
      version: matchBrowser[1]
    };
};
