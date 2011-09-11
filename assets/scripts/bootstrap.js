if(!QMImeLauncher){
	function QMImeLauncher(q){
		q?
		q.toggle():
		function(d,j){
			j=d.createElement('script');
			j.async=true;
			j.src='//ime.qq.com/fcgi-bin/getjs';
			j.setAttribute('ime-cfg','lt=2&im=212');
			d=d.getElementsByTagName('head')[0];
			d.insertBefore(j,d.firstChild);
		}(document);
	}

	function toggleIME(){
		QMImeLauncher(window.QQWebIME);
	}
}

chrome.extension.sendRequest({greeting: "prefs"}, function(response) {
  console.log(response.shouldLaunchWebIME);
  if(response.shouldLaunchWebIME){
  	toggleIME();
  }
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.greeting == "toggleWebIME"){
      toggleIME();
      sendResponse({ok:true});
    } else {
      sendResponse({});	
    }
});