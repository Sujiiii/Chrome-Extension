	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	   let link = tabs[0].url;
	   document.getElementById('host').innerHTML = link;
   }
);

$(document).ready(function() {
    chrome.tabs.captureVisibleTab(null,{},function(dataUri){
        document.open();
        document.write('<img src="'+dataUri+'">');
        document.close();
        });
    });