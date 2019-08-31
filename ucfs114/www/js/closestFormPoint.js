var closestFormPoint
var minDistance;
var distance1;
var client;

var formLayer;


function getDistance2(){

	//alert('loading the nearest quiz point');

	navigator.geolocation.getCurrentPosition(closestFormPoint);
	}


function closestFormPoint(position){

	//alert('calculating distance from points');

	//minDistance=0.05  //when the user getting close to the specific quiz point within 50m, there is an alert and the quiz shows up automatically
	minDistance=1000000000;    //10km is for testing   
	closestFormPoint=0;
	var userlat=position.coords.latitude;
	var userlng=position.coords.longitude;
	//alert(userlat + userlng);
	
	formLayer.eachLayer(function(layer){
		
		distance1=calculateDistance(userlat,userlng,layer.getLatLng().lat,layer.getLatLng().lng,'K');
		//alert(distance1);
		if (distance1<minDistance){
			minDistance = distance1; 
			//alert(minDistance);
			closestFormPoint=layer.feature.properties.id;
		}
	});

	formLayer.eachLayer(function(layer){
		if (layer.feature.properties.id==closestFormPoint){
			layer.openPopup();
			alert('You are closing the quiz point');
		}
	});
}

document.addEventListener('DOMContentLoaded',function()
{
	startFormDataLoad1();
	getDistance2();
	
},false);


function startFormDataLoad1(){
	
	xhrFormData = new XMLHttpRequest(); 
	var url = 'http://developer.cege.ucl.ac.uk:'+ 30314 + "/getQuizPoints/"+ 30314;  
	alert(url);
	xhrFormData.open("GET", url, true);
	xhrFormData.onreadystatechange = formDataResponse;
	xhrFormData.send();   
	} 



