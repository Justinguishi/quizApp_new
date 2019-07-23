var xhrFormData;

var httpPortNumber;

function startFormDataLoad(){
	getPort();
	
	xhrFormData = new XMLHttpRequest(); 
	var url = 'http://developer.cege.ucl.ac.uk:'+ httpPortNumber + "/getQuizPoints/"+ httpPortNumber;  
	alert(url);
	xhrFormData.open("GET", url, true);
	xhrFormData.onreadystatechange = formDataResponse;
	xhrFormData.send();   
	} 
	
function formDataResponse(){
	if (xhrFormData.readyState == 4) 
	{
	// once the data is ready, process the data
	var formData = xhrFormData.responseText;
	loadFormData(formData);
	}
}
var formLayer;
function loadFormData(formData) { 
 
      // convert the text received from the server to JSON  
      var formJSON = JSON.parse(formData); 
      // load the geoJSON layer 
      formLayer = L.geoJson(formJSON).addTo(mymap);  
      mymap.fitBounds(formLayer.getBounds()); 
	
}

