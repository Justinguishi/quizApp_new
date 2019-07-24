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
	  var quizPoints=formJSON;
      // load the geoJSON layer 
      formLayer = L.geoJson(formJSON,{ 
	  pointToLayer: function (feature, latlng) 
	  {
              // in this case, we build an HTML DIV string 
              // using the values in the data 
              var htmlString = "<DIV id='popup'"+ feature.properties.question_title + "><h2>" + feature.properties.quetion_title + "</h2><br>"; 
              htmlString = htmlString + "<h3>"+feature.properties.question_text + "</h3><br>"; 
              htmlString = htmlString + "<input type='radio' name='answer' id =''answer_1'/>"+feature.properties.answer_1+"<br>"; 
              htmlString = htmlString + "<input type='radio' name='answer' id =''answer_2'/>"+feature.properties.answer_2+"<br>"; 
              htmlString = htmlString + "<input type='radio' name='answer' id =''answer_3'/>"+feature.properties.answer_3+"<br>"; 
              htmlString = htmlString + "<input type='radio' name='answer' id =''answer_4'/>"+feature.properties.answer_4+"<br>"; 
             
			 htmlString = htmlString + "<button onclick='checkAnswer(" + feature.properties.id + ");return false;'>Submit Answer</button>"; 
 
              // now include a hidden element with the answer 
              // in this case the answer is alwasy the first choice 
              // for the assignment this will of course vary - you can use feature.properties.correct_answer 
              htmlString = htmlString + "<div id=answer" + feature.properties.id + " hidden>" +feature.properties.correct_answer+"</div>"; 
              htmlString = htmlString + "</div>"; 
              return L.marker(latlng).bindPopup(htmlString); 
            }, 
        } ).addTo(mymap);  
      mymap.fitBounds(formLayer.getBounds()); 
	
}

function checkAnswer(questionID) { 

	var answer = document.getElementById("answer"+questionID).innerHTML; 
 	// now check the question radio buttons 
 	var correctAnswer = false;  
 	var answerSelected = 0;  
 	for (var i=1; i < 5; i++) {   
 		if (document.getElementById("answer_"+i).checked){    
 			answerSelected = i;   
 		}   
 		if ((document.getElementById("answer_"+i).checked) && (i == answer)) { 
 			alert ("Well done");    
 			correctAnswer = true;   
 		}  
 	}  
 	if (correctAnswer === false) {   
 		// they didn't get it right   
 		alert("Better luck next time");  
 	} 

}        
 mymap.closePopup();
