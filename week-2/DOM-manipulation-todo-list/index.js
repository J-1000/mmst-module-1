// console.log(document.body);

// to access an element through its id
const todoList = document.getElementById("todo-list");

// to access elements through a type of element, or a tag
const allListItems = document.getElementsByTagName("li");
const todoListItems = todoList.getElementsByTagName("li");
console.log(todoListItems);

todoListItems[0].innerText; // "JavaScript lernen"
todoListItems[0].innerHTML; // "<strong>JavaScript</strong> lernen"

// todoListItems[1].innerHTML = "repair <em>bike</em>";

// todoListItems[0].innerText = "buy more <strong>mate</strong>";


for (const item of todoListItems) {
    console.log(item);
}


// Make all list items uppercase using .innerText
// Array.from(todoListItems).forEach(function(item) {

for (let item of todoListItems) {
    item.innerText = item.innerText.toUpperCase();
}

// select elements through their class
document.getElementsByClassName("container");

// access elements via css selectors:

// watch out: returns always a node list
// the first element that matches a selector
document.querySelector("#todo-list");
// a NodeList array of elements matching that selector
document.querySelectorAll("ul li");

const firstItem = document.querySelector("#todo-list > li");

// wir können das styling verändern
firstItem.style["background-color"] = "papayawhip";

// firstItem.style.backgroundColor = "papayawhip";


// oder das klassen attribut für das ausgewaehlte element setzen :
// firstItem.className = "checked";

// add a class / remove a class
firstItem.classList.add("checked");
firstItem.classList.remove("checked");
// toggle a class
firstItem.classList.toggle("checked");

firstItem.setAttribute("id", "first-item");
firstItem.getAttribute("id"); // "first-item"
firstItem.removeAttribute("id");
firstItem.getAttribute("id"); // null

// wir koennen mit set attribute das kaputte image fixen :
document.querySelector("img").setAttribute(
    "src",
    "https://images.unsplash.com/photo-1564258646808-fac8e26166a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
);

//   creating elements

// for (let i = 0; i < 5; i++) {
// wir moechten ein neues element an die todo liste anhaengen :
const newListItem = document.createElement("li");
todoList.appendChild(newListItem);
newListItem.innerText = "Kaffe nachbestellen";
// }

// wir moechten eine überschrift einbauen :
const heading = document.createElement("h1");
heading.innerText = "My To-Do list";

// const parent = document.querySelector(".container");
const parent = document.getElementsByClassName("container")[0];
// inserts the heading element inside the parent element, before the todoList element
parent.insertBefore(heading, todoList);

// registering an event on our button

// add or comment in the input on the page : 

// register a click event on our button

// test minimal functionality
document.getElementById("add-todo").onclick = function () {
    console.log('onclick on the button works');
};


document.getElementById("add-todo").onclick = addTodo;

function addTodo() {
    const newTodo = document.createElement("li");
    const inputValue = document.querySelector("input").value;

    newTodo.innerText = inputValue;

    document.getElementById('todo-list').appendChild(newTodo)

    // only add after toggleTodo (on the bottom) is implemented
    // newTodo.onclick = toggleTodo;

    // todoList.appendChild(newTodo);

    // clear the input :
    document.querySelector("input").value = '';

}

document.querySelectorAll("ul li").forEach(function (item) {
    item.onclick = toggleTodo;
});

// wir wollen das list item durchstreichen wenn wir darauf clicken
function toggleTodo(event) {
    const targetElement = event.currentTarget;
    targetElement.classList.toggle("checked");
}