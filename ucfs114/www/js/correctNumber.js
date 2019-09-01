
var xhrCorrectNum;
var xhrUserRanking;

function showCorAnsNum(){
	xhrCorrectNum = new XMLHttpRequest();
	var url = "http://developer.cege.ucl.ac.uk:"+httpPortNumber;
	url = url + "/GetCorAnsNum/"+httpPortNumber;
	xhrCorrectNum.open("GET", url, true);
	xhrCorrectNum.onreadystatechange = ansNumResponse;
	xhrCorrectNum.send();

}



function ansNumResponse(){
	if (xhrCorrectNum.readyState == 4) {
		// once the data is ready, process the data
		var correctNumString = xhrCorrectNum.responseText;
		//the code is to convert string into JSON format array
		//in order to get the num_questions
		var correctNumData="";
		for (var i = 1; i <correctNumString.length-1; i++) {
			correctNumData=correctNumData+correctNumString[i];
		}
		var ansNumJSON = JSON.parse(correctNumData);
		alert("You have answered "+ ansNumJSON.array_to_json[0].num_questions + " questions correctly.");
	}
}

//document.addEventListener('DOMContentLoaded',function(){showCorAnsNum();},false);

function showRanking(){
	xhrUserRanking = new XMLHttpRequest();
	var url = "http://developer.cege.ucl.ac.uk:"+httpPortNumber;
	url = url + "/GetRanking/"+httpPortNumber;
	xhrUserRanking.open("GET", url, true);
	xhrUserRanking.onreadystatechange = rankingResponse;
	xhrUserRanking.send();

}



function rankingResponse(){
	if (xhrUserRanking.readyState == 4) {
		// once the data is ready, process the data
		var rankingString = xhrUserRanking.responseText;
		//the code is to convert string into JSON format array
		//in order to get the rank
		var rankingData="";
		for (var i = 1; i <rankingString.length-1; i++) {
			rankingData=rankingData+rankingString[i];
		}
		var rankingJSON = JSON.parse(rankingData);
		alert("You ranking is: "+ rankingJSON.array_to_json[0].rank + ".");
	}
}

