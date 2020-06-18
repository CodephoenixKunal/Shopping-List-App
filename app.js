let el = document.querySelector("li.hot");
let newFeed = document.querySelector("input");
let addEle = document.querySelector("#button");

/* Functionalities to add 
Load preExisting items from local storage
add new Tasks
remove tasks
clear Tasks
filter tasks

completed tasks - color changes to purple

*/



loadEventListeners();

function loadEventListeners() {

    addEle.addEventListener("click", addItem);



}

function touchDone() {
    el.nextElementSibling.className = "cool bul"
}



function addItem() {
    let newEl = document.createElement("li")

    newEl.classList = "hot bul";


    let newText = document.createTextNode(newFeed.value);

    newEl.appendChild(newText);

    el.parentElement.appendChild(newEl);
}