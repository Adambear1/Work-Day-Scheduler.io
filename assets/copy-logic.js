//Variables
//EXAMPLE FORMAT:: const hour = moment().format('HH:mm:ss')
var hour = document.querySelector(".hour");
var task = document.querySelectorAll(".task");
var input = document.querySelectorAll("input");
var todayDisplay = document.querySelector("#currentDay");
// parseInt to get numeric value of string input ID
var taskValue = parseInt(document.querySelector(".task"));
var lock = document.querySelector(".lock");
// parseInt to get numeric value of string input ID
const hourTime = parseInt(moment().format('HH'));
var img = document.querySelectorAll("i")
var calendar = document.querySelector(".bg-modal")
var weather = document.querySelector(".weather")
var background = document.querySelector(".background")
var wrapper = document.querySelector(".wrapper")
var container = document.querySelector(".container")
var monthCalendar = document.querySelector(".current-month")
var closeBtn = document.querySelector(".fa-times")
var local = document.querySelector(".location")
var popup = document.querySelector(".bg-modal")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// AESTHETICS & INTERFACE APIS ////////////////////////////////////////////////////////////////////////////

//Displays date on HTML automatically through API
function todaysDate(){
    var today = moment().format("dddd, MMMM Do YYYY");
    //Concatinate by adding calendar image next to it
    todayDisplay.innerHTML = today + "            " + '<i class="fas fa-calendar-alt" style="font-size: 20px">';
}
todaysDate()

// Using weather API and built in functions within JavaScript to identify lat and lon coordinations for weather updates + city/state identification.
function getLocation() {
    // Coniditional statement to make sure browser supports geolocating feature
    if (navigator.geolocation) {
      // Provide our showPosition() function to getCurrentPosition
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // Called after the getLocation function and takes an argument of position.
  function showPosition(position) {
    // Grab coordinates from the given object & rounds off to nearest 10th.
    var lat = Math.round(position.coords.latitude * 10)/10;
    var lon = Math.round(position.coords.longitude * 10)/10;
    // Call our next function, passing on the coordinates
    weatherDisplay(lat, lon);
  }
//Calls function of getLocation, where showPosition is nested/called in
getLocation();


//Function to change background color task input section
function backGroundColor(){
    for (var i = 0; i < input.length; i++) {
        //Follows similar conditional statement to see if id of input value is less than curent time.
        //If so, then the background color is grey, to show that the time has passed.
        if (input[i].id < hourTime) {
            input[i].setAttribute("style", "background-color: lightslategray; opacity: 50%");
            }
        //If time === current time, then red
        else if (input[i].id == hourTime) {
            input[i].setAttribute("style", "background-color: red; opacity: 50%");
        }
        //If neither, then must be in future and is green
        else {
            input[i].setAttribute("style", "background-color: green; opacity: 50%");        
        }
    }}

backGroundColor();




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    BUTTON FUNCTIONS    ///////////////////////////////////////////////////////////////


//Buttons 9AM - 5PM all follow same business logic. 
//Starts by setting variables through moment.js as well as setting an empty array named tasks 
//Each button has independent function that is then called within button click in succeeding time.
//The function grabs the array and adds two names with paired keys.
                            //names/(keys) = id (time of input)
                            //               planner (value of inputs)
//Once array is called and added to within function, it is then pushed to global value to add to.
//The function of localStorage.setItem is then called to store that array with all functions added.
//Then conditional formatting is called that gives each task input an effect to acknowledge to user that task was saved.
                            //Follows same logic as before, where if ID < Time, then it is in past & colored grey....... etc.
//Following the conclusion of each function is an event listener for onclick. It states that once the DOM Content is Loaded, meaning all stored values of text
//are registeredto the DOM, then the preceeding function is called, which stores the values and gives the effect. 
                            //Essentially, it prevents an input from not being saved, if for some reason there is a lag within.




const day = moment().format('dddd, MMMM Do YYYY');
const month = moment().format('MMMM YYYY')
let tasks  = []
//9
const addTask9 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour9').textContent,
        planner: document.getElementById('9').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[0].id) < hourTime ){
        document.getElementById('9').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[0].id) === hourTime){
        document.getElementById('9').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('9').classList.add('submit-approval-future')
    }    
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button9').addEventListener('click', addTask9)
})
//10
const addTask10 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour10').textContent,
        planner: document.getElementById('10').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[1].id) < hourTime ){
        document.getElementById('10').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[1].id) === hourTime){
        document.getElementById('10').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('10').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button10').addEventListener('click', addTask10)
})
//11
const addTask11 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour11').textContent,
        planner: document.getElementById('11').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[2].id) < hourTime ){
        document.getElementById('11').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[2].id) === hourTime){
        document.getElementById('11').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('11').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button11').addEventListener('click', addTask11)
})
//12
const addTask12 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour12').textContent,
        planner: document.getElementById('12').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[3].id) < hourTime ){
        document.getElementById('12').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[3].id) === hourTime){
        document.getElementById('12').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('12').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button12').addEventListener('click', addTask12)
})
//13
const addTask13 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour13').textContent,
        planner: document.getElementById('13').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[4].id) < hourTime ){
        document.getElementById('13').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[4].id) === hourTime){
        document.getElementById('13').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('13').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button13').addEventListener('click', addTask13)
})
//14
const addTask14 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour14').textContent,
        planner: document.getElementById('14').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[5].id) < hourTime ){
        document.getElementById('14').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[5].id) === hourTime){
        document.getElementById('14').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('14').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button14').addEventListener('click', addTask14)
})
//15
const addTask15 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour15').textContent,
        planner: document.getElementById('15').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[6].id) < hourTime ){
        document.getElementById('15').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[6].id) === hourTime){
        document.getElementById('15').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('15').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button15').addEventListener('click', addTask15)
})
//16
const addTask16 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour16').textContent,
        planner: document.getElementById('16').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[7].id) < hourTime ){
        document.getElementById('16').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[7].id) === hourTime){
        document.getElementById('16').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('16').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button16').addEventListener('click', addTask16)
})
//17
const addTask17 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: document.querySelector('#hour17').textContent,
        planner: document.getElementById('17').value,
    }
    tasks.push(taskDay);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Button glow effect 
    if (parseInt(input[8].id) < hourTime ){
        document.getElementById('17').classList.add('submit-approval-past')
    } 
    else if (parseInt(input[8].id) === hourTime){
        document.getElementById('17').classList.add('submit-approval-present')
    }
    else {
        document.getElementById('17').classList.add('submit-approval-future')
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button17').addEventListener('click', addTask17)
})

//Retrieving Stored Tasks & Displaying After Refresh
var arrayRaw = localStorage.getItem("tasks")
var arrayData = JSON.parse(arrayRaw)
//Conditional statement so only stored values are displayed
if(arrayData != null){
    for (i = 0; i < arrayData.length; i++) {
        //'Planner' is a key within the object. Holds value of 'task input'
        if(arrayData[i].planner != null){
            //Pulled string from local storage, parsed it, and takes id value, which ranges from 0-9 (9AM-5PM)
            var inputNumber = arrayData[i].id
            //Trims last two digits from returned string (AM or PM) and changes into intiger for comparision with current time.
            var interval = parseInt(inputNumber.substring(0, inputNumber.length - 2))
            //Creating variable for div to house retrieved values within task class.
            var inputData = document.createElement("div");
            //Adding css class of task to the new div to assure it takes up 100% of fill.
            inputData.classList.add("task");
            
            //If returned time is less than 6, then adding 12 hours because all hours retrieved from moment.JS are in military standard (0-24).
            //Essentially shown to convert so all PM hours are converted and stored into same measurement standards.
            //Must be displayed within function because a new local variable is being created based off such measures, so simply this function nests all conditional statements
            //To make sure that once noon hits, then 12 is added to each succeeding number to equate properly.
            function int (){
                if (interval < 6){
                    var newInterval = interval + 12
            }
                    //Conditional statement to compare returned value of input to current time. 
                    //Logic that follows is that IF retrieved value is less than current time, THEN the retrieved value MUST be less conditionally formatted to appropriate color.
                    if (newInterval < hourTime){
                        //Since ID < time, then adding class of 'past' to assure colors are coordinated.
                        inputData.classList.add("submit-approval-past");
                    }
                    else if (newInterval === hourTime){
                        //ID = time, color will therefore be red
                        inputData.classList.add("submit-approval-present");
                    }
                    else {
                        //ID is greater than time, therefore it is in the future and will be green.
                        inputData.classList.add("submit-approval-future");
                    }
        }
        int() 
            //Now that Conditional formatting is sufficied, we add class list of 'displayText'
            inputData.classList.add("displayText");
            //Adds the value of retrieved object to the text box for display within new Div (reference line 45)
            inputData.textContent = (arrayData[i].planner);
            //Using jQuery to dynamically identify which value is retireved and to find coordinating input value through concatination of for loop variable to replace with new value.
            var test = "#input" + arrayData[i].id;
            $(test).replaceWith(inputData);
           
        }
    }
}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  POPUP MODAL///////////////////////////////////////////////////////////////////////


//Function to make popup appear when date/time is clicked
todayDisplay.addEventListener("click", function(){
    popup.classList.remove('hide');
    container.classList.add('hide');

})

//closes out of modal when close button is clicked
closeBtn.addEventListener("click", function(){
    popup.classList.add('hide');
    container.classList.remove('hide')

})

// //Adds retrieved string stored to summary sheet in correct time frame.
// for (var j = 0; j < 9; j++) {
//         //Calls locally the retrieved items and parses into an object
//         var taskRAW = JSON.parse(localStorage.getItem('tasks'))
//         console.log(taskRAW[0].planner)
//         var task = taskRAW[0].id.substr(-3)
//             for(var i = 9; i < 18; i++){
//                 // console.log(document.querySelector("#hour"+[i]).textContent);
//                 if (taskRAW[j].id.substr(-3) === document.querySelector("#hour"+[i]).textContent){
//                     // console.log(document.querySelector("#hour9").textContent)
//                     document.querySelector('#summary'+[i]).textContent += "  " + taskRAW[j].planner
//                     console.log(document.querySelector('#summary'+[i]).textContent)
//                     console.log(taskRAW[j].planner)
//                 }
//             }
//         }
    


//Weather API used for dynamic background
function weatherDisplay(lat, lon) {
//Takes defined lat & long for each used based off their current location & concatinates into variable URL to be used in weather API
var queryURL = 'http://api.openweathermap.org/data/2.5/find?lat='+ lat + '&lon=' +  lon + '&APPID=79bb7dc0e8f07f6ebe01166410e6e392&APPID=79bb7dc0e8f07f6ebe01166410e6e392'
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    //Retrieves current City that user is in & Kelvin recorded for that location and stores in variables.
    var City = response.list[0].name;
    var Kelvin = (response.list[0].main.temp)
    // Converts Kelvin to Farenheir
    var Farenheit = Math.floor((Kelvin - 273.15) * 9/5 + 32)
    //Adds to HTML for display
    weather.textContent = Farenheit + "°"
    local.textContent = City + ", WA"
    //Identifies forecast to make background of summary sheet dynamic as well to display what the current weather is.
    var forecast = response.list[0].weather[0].main
    //Conditional statement to show that if it is before 6 AM or after 8 PM, then it is nighttime, and does not check for weather.
    //However, if before 6AM and 8PM, then checks for Clouds
    if(hourTime > 6 && hourTime < 20 && forecast === "Clouds"){
        //Cloudy pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://c1.wallpaperflare.com/preview/399/588/997/air-sky-cloud-background.jpg')")
        }
    //If not clouds, then checks for rain
    else if (hourTime > 6 && hourTime < 20 && forecast === "Rain"){
        //Rainy pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1563556593000/photosp/1ff6c1b0-139b-42c2-b1af-a6096aa3d847/stock-photo-water-wet-raindrop-glass-liquid-moist-surface-aqua-background-1ff6c1b0-139b-42c2-b1af-a6096aa3d847.jpg')")
        }
    //If not rain or clouds,  then checks for clear skies
    else if (hourTime > 6 && hourTime < 20 && forecast === "Clear"){
        //Sunny pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://wallpaperplay.com/walls/full/5/8/5/76997.jpg')")  
        }
    //If not, then checks for mist
    else if (hourTime > 6 && hourTime < 20 && forecast === "Mist"){
        //Sunny pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://previews.123rf.com/images/leoco/leoco1612/leoco161200074/69459908-surreal-figures-on-a-misty-background.jpg')")  
        }
    //If none, then defaults to nighttime
    else {
         //Night pic
         document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/ug37e-PZBJNCA7CB8-Full-Image_GalleryBackground-en-US-1522432141586._SX1080_.jpg')") 
        }
})
}

weatherDisplay();


