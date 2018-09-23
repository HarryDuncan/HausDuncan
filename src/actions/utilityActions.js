
export function findBrowser(){
	var browser = '';
	console.log(browser)
	
	let isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	if(isOpera){
		browser = 'Opera';
	}

	// Firefox 1.0+
	let isFirefox = typeof InstallTrigger !== 'undefined';
	if(isFirefox){
		browser = 'Firefox';
	}

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	let isSafari = navigator.userAgent.indexOf("Safari") > -1;
	if(isSafari){
		browser = 'Safari';
	}

	// Internet Explorer 6-11
	let isIE = /*@cc_on!@*/false || !!document.documentMode;
	if(isIE){
		browser = 'IE';
	}

	// Edge 20+
	let isEdge = !isIE && !!window.StyleMedia;
	if(isEdge){
		browser = 'Edge';
	}

	// Chrome 1+
	let isChrome = !!window.chrome && !!window.chrome.webstore;
	if(isChrome){
		browser = 'Chrome';
	}


	// Blink engine detection
	let isBlink = (isChrome || isOpera) && !!window.CSS;
	if(isBlink){
		browser = 'Blink';
	}

	console.log(browser)
	return browser
}