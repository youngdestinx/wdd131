// select the DOM element for manipulations
const mainnav = document.querySelector("ul")
const hambutton = document.querySelector("#menu")
const header = document.querySelector("header")

// Dynamically add class "show" to the DOM selected
hambutton.addEventListener("click", ()=> {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
    header.classList.toggle("show")});

// select the DOM elements for output
const currentyear = document.getElementById("currentyear")

// use the date object
const today = new Date().getFullYear();

// update the currentyear variable
currentyear.textContent = today

// select the DOM elements for output
const changes = document.getElementById("lastModified")

// transform lastModified into a Date object
let change = new Date(document.lastModified)

// update the changes variable
changes.textContent = change 