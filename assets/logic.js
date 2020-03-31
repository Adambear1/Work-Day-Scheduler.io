// Setup calendar
    // HTML table; 9AM - 5PM.
        //  3 columns:
            //Hour
                //Give value == hour label
            //Notes/Tasks
                //Form --> Label (give value) --> Input
            //Submit btn
                //Submit btn = local storage & refresh page (setItem)
                    //Load page = retrieve storage & display (getItem)
// Conditional Formatting of colors
    //past hours = grey
    //present = red
    //future = green


//EXAMPLE FORMAT:: const now = moment().format('HH:mm:ss')

var hour = document.querySelector(".hour");
var task = document.querySelectorAll(".task");
var input = document.querySelectorAll("input");
var button = document.querySelectorAll(".lock");
// parseInt to get numeric value of string input ID
var taskValue = parseInt(document.querySelector(".task"));
var lock = document.querySelector(".lock");
// parseInt to get numeric value of string input ID
const now = parseInt(moment().format('HH'));

// function backGroundColor(){
//     for (var i = 0; i < task.length; i++) {
//        console.log(task[i].id)
//         if (task[i].id < now) {
//             task[i].setAttribute("style", "background-color: lightslategray;");
//             console.log(task[i])
//            }
//         else if (task[i].id == now) {
//             task[i].setAttribute("style", "background-color: red;");
//         }
//         else {
//             task[i].setAttribute("style", "background-color: green;");        
//         }
//     }}
function backGroundColor(){
    for (var i = 0; i < input.length; i++) {
        console.log(input[i].id)
        if (input[i].id < now) {
            input[i].setAttribute("style", "background-color: lightslategray;");
            console.log(task[i])
            }
        else if (input[i].id == now) {
            input[i].setAttribute("style", "background-color: red;");
        }
        else {
            input[i].setAttribute("style", "background-color: green;");        
        }
    }}
       
console.log(input)
console.log(input.length)





backGroundColor();
   
// // console.log(taskValue);
// console.log(now);
// console.log(task.value < now);
// console.log(task)
// console.log(task.length)
// console.log(task[0].textContent);
// console.log(button)

function storeItem() {
    for(var j = 0; j < task.length; j++){
        if (button[j].id == "lock"+task[j].id){
            var newItem = task[j].textContent;
            localStorage.setItem("task"+[j], JSON.stringify(newItem));
            console.log(newItem)
        }
    console.log(button[j].id)
    console.log("lock"+task[j].id)


    
    // var newItem = task[j].textContent;
    // localStorage.setItem("task", JSON.stringify(newItem));
    
    }
}

$(".button").on('click', function (){
    storeItem()
    location.reload
})

