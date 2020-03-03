// set 'text/plain'

let xhrTextPlain = new XMLHttpRequest();

xhrTextPlain.open('GET', 'http://eloquentjavascript.net/author', false);

xhrTextPlain.setRequestHeader('Accept', 'text/plain');

xhrTextPlain.send();

// set 'text/html'

let xhrTextHtml = new XMLHttpRequest();

xhrTextHtml.open('GET', 'http://eloquentjavascript.net/author', false);

xhrTextHtml.setRequestHeader('Accept', 'text/html');

xhrTextHtml.send();

// set 'application/json'

let xhrAppJson = new XMLHttpRequest();

xhrAppJson.open('GET', 'http://eloquentjavascript.net/author', false);

xhrAppJson.setRequestHeader('Accept', 'application/json');

xhrAppJson.send();

// set 'application/rainbows+unicorns'

let xhrAppRainbows = new XMLHttpRequest();

xhrAppRainbows.open('GET', 'http://eloquentjavascript.net/author', false);

xhrAppRainbows.setRequestHeader('Accept', 'application/rainbows+unicorns');

xhrAppRainbows.send();