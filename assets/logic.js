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
var popup = document.querySelector(".bg-modal")
var weather = document.querySelector(".weather")
var background = document.querySelector(".background")
var wrapper = document.querySelector(".wrapper")
var container = document.querySelector(".container")
var monthCalendar = document.querySelector(".current-month")
var local = document.querySelector(".location")
var closeBtn = document.querySelector(".fa-times")

console.log(task)
console.log(img)



function todaysDate(){
    var today = moment().format("dddd, MMMM Do YYYY");
    todayDisplay.innerHTML = today + "            " + '<i class="fas fa-calendar-alt" style="font-size: 20px">';
    console.log(today)
}
todaysDate()

// 

var array = localStorage.getItem("tasks")
var arrayData = JSON.parse(array)
console.log(array.length)


if(arrayData != null){
    for (i = 0; i < arrayData.length; i++) {
        if(arrayData[i].planner != null){
            var inputNumber = arrayData[i].id
            console.log(inputNumber);
            var inputData = document.createElement("div");
            inputData.classList.add("task");
            inputData.classList.add("submit-approval-past");
            inputData.classList.add("displayText");
            inputData.textContent = (arrayData[i].planner);
            var test = "#input" + arrayData[i].id;
            $(test).replaceWith(inputData);
        }
    }

}

console.log(arrayData.length)

















// todayDisplay.addEventListener('click', function(){
//     calendar.classList.setAttribute("class", "appear")
// })

// console.log(calendar)





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
////////////////////////////////    BUTTON FUNCTIONS TO SAVE TEXT//////////////////////////////////////////////////////

const day = moment().format('dddd, MMMM Do YYYY');
const month = moment().format('MMMM YYYY')

let tasks = []

    
var arrayRaw = localStorage.getItem("tasks")
var array = JSON.parse(arrayRaw)


//9
const addTask9 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: day + "  " +  document.querySelector('#hour9').textContent,
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

    $("#9").replaceWith("<p id='textnine'>" + array[0].planner + "</p>")



}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button9').addEventListener('click', addTask9)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var array = localStorage.getItem("tasks")
// var arrayData = JSON.parse(array)
// console.log(array.length)


// if(arrayData != null){
//     for (i = 0; i < arrayData.length; i++) {
//         if(arrayData[i].planner != null){
//             var inputNumber = arrayData[i].id
//             console.log(inputNumber);
//             var inputData = document.createElement("div");
//             inputData.classList.add("task");
//             inputData.classList.add("submit-approval-past");
//             inputData.classList.add("displayText");
//             inputData.textContent = (arrayData[i].planner);
//             var test = "#input" + arrayData[i].id;
//             $(test).replaceWith(inputData);
//         }
//     }

// }

// console.log(arrayData.length)


// const addTask9 = (event)=>{
//     event.preventDefault();
//     let taskDay = {
//         id: document.querySelector('#hour9').textContent,
//     }}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//10
const addTask10 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: day + "  " +    document.querySelector('#hour10').textContent,
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

    $("#10").replaceWith("<p id='textten'>" + array[1].planner + "</p>")

}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button10').addEventListener('click', addTask10)
});

//11
const addTask11 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: day + "  " +    document.querySelector('#hour10').textContent,
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
    
    $("#11").replaceWith("<p id='texteleven>" + array[2].planner + "</p>")

}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button11').addEventListener('click', addTask11)
})

//12
const addTask12 = (event)=>{
    event.preventDefault();
    let taskDay = {
        id: day + "  " +    document.querySelector('#hour12').textContent,
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
        id: day + "  " +    document.querySelector('#hour13').textContent,
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
        id: day + "  " +    document.querySelector('#hour14').textContent,
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
        id: day + "  " +    document.querySelector('#hour15').textContent,
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
        id: day + "  " +    document.querySelector('#hour16').textContent,
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
        id: day + "  " +    document.querySelector('#hour17').textContent,
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

//////////////////////////////////SUB-FUNCTION TO DISPLAY TEXT////////////////////////////////////////////////////////////////////////////////////


// var arrayRaw = localStorage.getItem("tasks")
// console.logDataRaw)
// var array = JSON.parse(arrayRaw)
// console.log(array)
// console.log(array[0].planner)
// console.log(array.length)

// for(var i = 0; i < array.length; i++){
//     // if (array[i]+9)
//     console.log(array[i].id)
//     var timeInput = array[i].id.substr(-3).trim()
//     console.log(timeInput)
//         if (timeInput === )
// }


// function retrieveValue9() {
//     $("9").replaceWith( "<p>" + array[0].planner + "</p>" );
// }

// window.onload = retrieveValue9() 







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  POPUP CALENDAR  ///////////////////////////////////////////////////////////////////////


todayDisplay.addEventListener("click", function(){
    popup.classList.remove('hide');
    container.classList.add('hide');

})


closeBtn.addEventListener("click", function(){
    popup.classList.add('hide');
    container.classList.remove('hide')

})

///////////////////////////////////////////////////////////////////////////


// for (var j = 0; j < 9; j++) {
//     var taskRAW = JSON.parse(localStorage.getItem('tasks'))
//     // console.log(taskRAW[0].planner)
//     // var task = taskRAW[0].id.substr(-3)
//         for(var i = 9; i < 18; i++){
//             // console.log(document.querySelector("#hour"+[i]).textContent);
//             if (taskRAW[j].id.substr(-3) === document.querySelector("#hour"+[i]).textContent){
//                 // console.log(document.querySelector("#hour9").textContent)
//                 document.querySelector('#summary'+[i]).textContent += "  " + taskRAW[j].planner
//                 console.log(document.querySelector('#summary'+[i]).textContent)
//                 console.log(taskRAW[j].planner)
//             }
//         }
//     }


// var tasknineRAW = JSON.parse(localStorage.getItem('tasks'))
// var tasknine = tasknineRAW[0].id.substr(-3)
// // var tasknine = tasknineRAW.substr(-3)

// console.log(tasknine)