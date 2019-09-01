# Location based quizApp
- This is the Technical Guide of quizApp
	>In this section, the App track the movement of the user. When they are close to a given point, 
	the App would prompt the user to answer a multiple-choice question about that location. After the 
	question selection window pops up, The user will then select the answer from the list. The system
	will let the user know if they are right or wrong, and insert the answer to the database subsequently.

## Requirements
#### Hardware: 	

- A computer with positioning function 
- Or a smart phone equipped with Android system( Here I use Samsung Galaxy S9+ )
	 >The phone is powered by Android 9.0, downloading PhoneGap via Google Play and tests quizApp.

Since the quiz app is running on an Android phone and needs to track the location, an Android phone with a location
 function is required.If the app is running on the computer,it also needs the computer to have a positioning function.

#### Software:
- Bitvise SSH Client 8.29 in computers 
	 >Applying this SSH Server to provide remote access to the UCL server
- PhoneGap Developer 1.8.4 APK in Android 
	 >building up cross-platform apps using HTML, CSS and Javascript with this App.
	 
Phonegap is software that must be downloaded, which converts your HTML and Javascript into code that can be installed on a mobile phone as a native App. You can easily do this by going to the browser on your phone and typing the URL of your web page into the browser.

####  Browser: 
- Google Chrome 73 
- Microsoft Edge
- Internet Explorer 11
	>Running quizApp and questionApp on these browsers. 

if you want to debug the wrong part of the code, a browser with a console window is a good choice.In this way the user can clearly see where the error occurred and effectively correct it, although it is not necessary.

## Deployment
The Quiz Answering App is developed by HTML5 and Javascript.All the functions developed here are basically using Javascript and the solution 
is mainly the JavaScript and XML (AJAX) which is used  to create multiple web applicationson the client side.  A phonegap app is built up
 by terminal of the Bitvise SSH Client. It is an open source mobile device development framework designed to enable developers to develop 
 cross-platform mobile device applications using Web APIs such as HTML, Javascript, and CSS. What the developer needs to do is entering a simple command into
the terminal. The app can be operated by typing the command 'phonegap serve' into the terminal.
>When opening the app, all the existing quiz points will be displayed automatically on the map, and if the client are just within 500 meters away from
 the quiz point, the quiz will pop up automatically. The popped up quiz are displayed as multiple choice questions, each option collecting by the 
 programming sentence feature.properties.id and displaying and organizing them as pop up quiz by using htmlString. After selecting the answer,
 the app will tell clients correct or not by checking whether the selected option is same with the correct answer recorded in the system, 
 and upload the question using the AJAX. The quizApp can also tells the client how many correct answers they have uploaded by clicking the 'show Correct Num' on the 
 left-hand side menu.
 
 - This App uses github submodules. Therefore, the deloyment process is as follows:
 
 1: check the local directory
	
	 >pwd
	 /home/studentuser/code/quizApp_new

	The first is some basic common sense: Be careful about everything, wrong uploads or clone data can easily break 
	the site. Throughout the process, must be aware of the structure of the entire data store, and you need to check
	the status of the code running from time to time.
	
2: connect to deployment branch in GitHub
	
	 >git clone https://github.com/ucl-geospatial/uczl374-quiz.git--recurse-submodules
	
	Before deploy anything, it has to be in the deployment branch. For example, I have more than 10 branches in the 
	cege0043-materialdesignlite repositry.After each step is over, the newly uploaded data is merged into the master.
	Only by doing this preparation can the data be safely protected and no data will be lost for the user. 
	And, doing so will make the data more organized, and every step of the work can be shown in GitHub.
	
3: Make the change

	 >cd uczl374_quiz/uczl374/www
	
	Developers must understand the purpose of the entire project at the outset, build a basic framework, and then 
	refine and modify each feature that you want to add in such a framework.  Code modification in such a fixed 
	format does not affect the entire page due to a partial code bug.First, the main part of the code is deployed,
	and then the relatively unimportant part is modified, and finally unified testing and correction.
	
	I mainly carried out 4 steps:
	First, the implementation of the form data from the database, in the classroom ppt based on the need to change 
	the corresponding parameters, all the code in getData.js. Second, the data obtained from the database is 
	displayed on the map in the form of popup, and problems and candidate answers appear at the same time as the 
	coordinates appear.Third, check the answer, I made a long time to modify, the specific reason should be that I 
	did not fully understand the meaning of each line of code, but found the correct way Finally. Forth, upload the 
	answer back to the database, which form the basis of the following showCorrectNumber function. In summary,these
	steps are the most important steps I need to have in the quizApp.
		
## Testing 
After the deployment, the server can be tested. NB. The questionApp and quizApp should be deployed and tested separately.
The testing of code can be divided into several parts. 
>First, we need to check whether the entire app can run normally. The main function of the whole quiz app can be realized: track the user's location and display it on the map, display
 the coordinates of quiz points, when you click quiz points After that, the corresponding question can be popped up in the
 web page, and the user can select the answer, and the answer selected can be resubmitted back to the database. Some advanced functions
 need to be mentioned is that when the client close to the quiz points with in a certain distance, the closest quiz point would popup automatically,
and the client can also get the information about the correct answer number.

>Secondly, it is tested whether each function in the app can run successfully,such as get earthquakes, show map, etc. These functions do not play a major role in this quiz app, but a successful mobile app 
should guarantee each function can run smoothly.
		
- For testing the code, the tester can select random points on the map and then set random answer then submit it, opening the server to see whether the answer has already been saved.
	 >1.Opening the quizApp in the browser( http://developer.cege.ucl.ac.uk:30314/). Clicking on the map to select different points and answer different questions, it is better if there is a certain distance between
	 points since there is 5 to 10 meters error in the Global Navigation Satellite System (GNSS). That is also the major reason that set 50 meter as the certain distance to require the closest quiz point.
	(user can also walk around the UCL and see whether the closest quiz point would popup or not)
	 
	 >2.After submitting the answer, tester can refresh the database page to check whether the answer status changed or not.

	 >3.If there is any question about the app, tester can click the left-hand side menu to click the 'Help document' to check the user guide.	

 ## Functionalities
| Directory  |  File  | Functions  |
| :------------: | :------------: | :------------: |
|uczl374-quiz |index.html| Foundation of this web-base questionApp|
|uczl374-quiz |LeafletGeoJSON2.html|Insert a basic map in the right-hand menu|
|uczl374-quiz  |helpDocument_quiz.html| link the help document|	 
|uczl374-quiz  |leaflet.js| provide a simple empty map|	
|uczl374-quiz  |leafletFunction.js| add polygon and the earthquakes data on that map|	
|uczl374-quiz  |AJAX.js| process the AJAX request|	
|uczl374-quiz  |getData.js| load the quiz points from database and show them on map|	
|uczl374-quiz  |rhMenu.js| UCL logo function|	
|uczl374-quiz |startup.js| trigger the function when running the web page |	
|uczl374-quiz  |uploadData.js| upload the users' answers to the database|	
|uczl374-quiz  |userTracking.js| Positioning the user|	
|uczl374-quiz |utilities.js| get the port number|	
|uczl374-quiz |closestFromPoint.js| calculate the distance between user and quiz points,then pop up the closes one|	
|uczl374-quiz |correctNumber.js| get the correct answer number and ranking|	
		
