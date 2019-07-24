var httpPortNumber;
	
	function trackAndCircle() {
		trackLocation();
	    addPointLinePoly();
		getEarthquakes();
		}

		
	function loadW3HTML() { 
	w3.includeHTML();
	} 


	function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		//trackAndCircle();
		getPort();
		//startFormDataLoad();
		loadW3HTML();
	},false);
}	     