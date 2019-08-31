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
		//getPort();
		//get users' port number
		trackLocation();
		//automatically get user location  
		//getDistance2();
		//startFormDataLoad();
		loadW3HTML();
	},false);
	
}	     
