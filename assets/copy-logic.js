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

console.log(task)
console.log(img)
function todaysDate(){
    var today = moment().format("dddd, MMMM Do YYYY");
    todayDisplay.innerHTML = today + "            " + '<i class="fas fa-calendar-alt" style="font-size: 20px">';
    console.log(today)
}
todaysDate()


var arrayRaw = localStorage.getItem("tasks")
var arrayData = JSON.parse(arrayRaw)
console.log(arrayData)
// console.log(arrayData.length);
// window.load()


if(arrayData != null){
    for (i = 0; i < arrayData.length; i++) {
        if(arrayData[i].planner != null){

            
            var inputNumber = arrayData[i].id
            var interval = parseInt(inputNumber.substring(0, inputNumber.length - 2))
            console.log(interval);
            if (interval < 6){
                var newInterval = interval + 12
            }
            console.log(newInterval)
            console.log(hourTime);
            var inputData = document.createElement("div");
            inputData.classList.add("task");
            if (newInterval < hourTime){
                inputData.classList.add("submit-approval-past");
            }
            else if (newInterval === hourTime){
                inputData.classList.add("submit-approval-present");
            }
            else {
                inputData.classList.add("submit-approval-future");
            }
            
            inputData.classList.add("displayText");
            inputData.textContent = (arrayData[i].planner);
            var test = "#input" + arrayData[i].id;
            $(test).replaceWith(inputData);
        }
    }
}

// Location
function getLocation() {
    // Make sure browser supports this feature
    if (navigator.geolocation) {
      // Provide our showPosition() function to getCurrentPosition
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // This will get called after getCurrentPosition()
  function showPosition(position) {
    // Grab coordinates from the given object
    var lat = Math.round(position.coords.latitude * 10)/10;
    var lon = Math.round(position.coords.longitude * 10)/10;
    console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

    // Call our next function, passing on the coordinates
    weatherDisplay(lat, lon);
  }
getLocation();

function backGroundColor(){
    for (var i = 0; i < input.length; i++) {
        console.log(input)
        console.log(input[i])
        console.log(input[i].id)
        console.log(img[i])
        console.log(img[i].classList[1])
        if (input[i].id < hourTime) {
            input[i].setAttribute("style", "background-color: lightslategray; opacity: 50%");
            // img[i].classList[1].setAttribute("style", "color: lightslategray; opacity: 50% !important"); 
            console.log(task[i])
            }
        else if (input[i].id == hourTime) {
            input[i].setAttribute("style", "background-color: red; opacity: 50%");
        }
        else {
            input[i].setAttribute("style", "background-color: green; opacity: 50%");        
        }
    }}
console.log(input)
console.log(input.length)
backGroundColor();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    BUTTON FUNCTIONS    ///////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////  POPUP CALENDAR  ///////////////////////////////////////////////////////////////////////


todayDisplay.addEventListener("click", function(){
    popup.classList.remove('hide');
    container.classList.add('hide');

})


closeBtn.addEventListener("click", function(){
    popup.classList.add('hide');
    container.classList.remove('hide')

})

// for (var j = 0; j < 9; j++) {
//         var taskRAW = JSON.parse(localStorage.getItem('tasks'))
//         // console.log(taskRAW[0].planner)
//         // var task = taskRAW[0].id.substr(-3)
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
    
    
//     var tasknineRAW = JSON.parse(localStorage.getItem('tasks'))
//     var tasknine = tasknineRAW[0].id.substr(-3)
//     // var tasknine = tasknineRAW.substr(-3)
    
//     console.log(tasknine)




// 

function backGroundColor(){
for (var i = 0; i < input.length; i++) {
    console.log(input)
    console.log(input[i])
    console.log(input[i].id)
    console.log(img[i])
    console.log(img[i].classList[1])
    
    if (input[i].id < hourTime) {
        input[i].setAttribute("style", "background-color: lightslategray; opacity: 50%");
        // img[i].classList[1].setAttribute("style", "color: lightslategray; opacity: 50% !important"); 
        console.log(task[i])
        }
    else if (input[i].id == hourTime) {
        input[i].setAttribute("style", "background-color: red; opacity: 50%");
    }
    else {
        input[i].setAttribute("style", "background-color: green; opacity: 50%");        
    }
}}
   
console.log(input)
console.log(input.length)

backGroundColor();



function getLocation() {
// Make sure browser supports this feature
if (navigator.geolocation) {
  // Provide our showPosition() function to getCurrentPosition
  navigator.geolocation.getCurrentPosition(showPosition);
} 
else {
  alert("Geolocation is not supported by this browser.");
}
}
// This will get called after getCurrentPosition()
function showPosition(position) {
// Grab coordinates from the given object
var lat = Math.round(position.coords.latitude * 10)/10;
var lon = Math.round(position.coords.longitude * 10)/10;
console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

// Call our next function, passing on the coordinates
weatherDisplay(lat, lon);

}
getLocation();


// 

//Weather API
function weatherDisplay(lat, lon) {
// var city = "University+Place"
// var latitude =   ;
// var longitude =    ;

var queryURL = 'http://api.openweathermap.org/data/2.5/find?lat='+ lat + '&lon=' +  lon + '&APPID=79bb7dc0e8f07f6ebe01166410e6e392&APPID=79bb7dc0e8f07f6ebe01166410e6e392'
// var queryURLCity = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=79bb7dc0e8f07f6ebe01166410e6e392"
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    console.log(response.list[0].name)
    console.log(response.list[0].main.temp)
    var City = response.list[0].name;
    var Kelvin = (response.list[0].main.temp)
    // var Kelvin = parseInt(response.main.temp)
    var Farenheit = Math.floor((Kelvin - 273.15) * 9/5 + 32)
    console.log(Farenheit)
    weather.textContent = Farenheit + "°"
    local.textContent = City + ", WA"

    console.log(response)

    var forecast = response.list[0].weather[0].main
    console.log(forecast);
    console.log(response.list[0].weather[0].main)
    if(hourTime > 6 && hourTime < 20 && forecast === "Clouds"){
        //Cloudy pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://c1.wallpaperflare.com/preview/399/588/997/air-sky-cloud-background.jpg')")
        }
    else if (hourTime > 6 && hourTime < 20 && forecast === "Rain"){
        //Rainy pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1563556593000/photosp/1ff6c1b0-139b-42c2-b1af-a6096aa3d847/stock-photo-water-wet-raindrop-glass-liquid-moist-surface-aqua-background-1ff6c1b0-139b-42c2-b1af-a6096aa3d847.jpg')")
        }
    else if (hourTime > 6 && hourTime < 20 && forecast === "Clear"){
        //Sunny pic
        document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://wallpaperplay.com/walls/full/5/8/5/76997.jpg')")  
        }
    else {
         //Night pic
         document.querySelector('.modal-content').setAttribute("style", "background-image: url('https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/ug37e-PZBJNCA7CB8-Full-Image_GalleryBackground-en-US-1522432141586._SX1080_.jpg')") 
        }

    

    console.log(forecast == 'Clear')
})
}

weatherDisplay();


