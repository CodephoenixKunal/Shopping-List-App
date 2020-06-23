let el = document.querySelector("li.hot");
let newFeed = document.querySelector("input");
let addEle = document.querySelector("#button");

/*Issues:

1.  submit event not working: click works

2.  issue of an empty row gets added: add a check (if) 

3.    */

/* Functionalities to add 
Load preExisting items from local storage
add new Tasks
remove tasks
clear Tasks
filter tasks
completed tasks - color changes to purple\
*/


/* Add icon for main header and delete icons
 Make responsive for different screen sizes*/



loadEventListeners();

function loadEventListeners() {

    addEle.addEventListener("click", addItem);

    // newFeed.addEventListener("keyup", keyEvent)

}

function touchDone() {
    el.nextElementSibling.className = "cool bul"
}

// function keyEvent(e) {
//     console.log(e.target.value)
// }

function addItem(e) {
    // if (newFeed.value === "") {
    //     alert("Add some item!")
    // };
    let newEl = document.createElement("li")

    newEl.classList = "hot bul";



    let newText = document.createTextNode(newFeed.value);

    console.log(e)

    newEl.appendChild(newText);

    el.parentElement.appendChild(newEl);

    newFeed.value = " "

}