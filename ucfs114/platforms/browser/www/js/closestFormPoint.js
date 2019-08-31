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

	//minDistance=0.5;  //when the user getting close to the specific quiz point within 500m, there is an alert and the quiz shows up automatically
	minDistance=1000000000;    //100000000km is for testing   
	closestFormPoint=0;
	var userlat=position.coords.latitude;
	var userlng=position.coords.longitude;
	alert('latitude:'+ userlat + 'longitude:'+ userlng);
	alert('calculating distance from points,which is not stable, may takes a long time');
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
	getPort();
	getDistance2();
	
},false);

