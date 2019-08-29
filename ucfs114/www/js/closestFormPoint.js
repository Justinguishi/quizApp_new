var closestFormPoint
var minDistance;
var distance;
var client;
var userlat;
var userlng;



function getDistance2(){

	alert('getting distance');

	navigator.geolocation.getCurrentPosition(closestFormPoint);

	}





function closestFormPoint(position){

	//alert('calculating distance from points');

	//minDistance=0.05  //when the user getting close to the specific quiz point within 50m, there is an alert and the quiz shows up automatically
	minDistance=100000000000;    //1km is for testing   
	closestFormPoint=0;
	userlat=position.coords.latitude;
	userlng=position.coords.longitude;
	QuizLayer.eachLayer(function(layer){

		//var feature = layer.feature;

		distance=calculateDistance(userlat,userlng,layer.getLatLng().lat,layer.getLatLng().lng,'K');

		if (distance<minDistance){

			closestFormPoint=layer.feature.properties.id;

		}

	});

	QuizLayer.eachLayer(function(layer){

		if (layer.feature.properties.id==closestFormPoint){

			layer.openPopup();

		}

	});
	proximity(position);
}



//code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-inyour-web-apps.html

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var radlon1 = Math.PI * lon1/180;
		var radlon2 = Math.PI * lon2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var subAngle = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		subAngle = Math.acos(subAngle);
		subAngle = subAngle * 180/Math.PI; 				// convert the degree value returned by acos back to degrees from radians
		dist = (subAngle/360) * 2 * Math.PI * 3956; 	// ((subtended angle in degrees)/360) * 2 * pi * radius ),where radius of the earth is 3956 miles	
		if (unit=="K") { dist = dist * 1.609344 ;} 		// convert miles to km
		if (unit=="N") { dist = dist * 0.8684 ;} 		// convert miles to nautical miles
		return dist;

		}



//proximity alert
//this function is used for getting the closest quiz point
//you have to wait patiently here since the phone is a little bit old to load the function fastly
//the codes here adapted from Week 6 Practical, author: Dr.	Claire Ellul

var maxDistance;

function proximity(position){

	maxDistance = 1; // 50 metres is the minimum distance for the proximity alert

	//userlat=position.coords.latitude;

	//userlng=position.coords.longitude;

	QuizLayer.eachLayer(function(layer){

		distance = calculateDistance(userlat, userlng, layer.getLatLng().lat, layer.getLatLng().lng, 'K');

		if (distance < maxDistance){

			closestPoint = layer.feature.properties.id;

		}

	});

	QuizLayer.eachLayer(function(layer){

		if (layer.feature.properties.id == closestPoint){

			layer.openPopup();

			alert('You are closing the quiz point');

		}

	});

}



//document.addEventListener('DOMContentLoaded',function(){getDistance2();closestFormPoint();},false);