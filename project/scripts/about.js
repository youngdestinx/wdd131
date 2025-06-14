const photo = document.querySelector("blockquote");

const image = document.createElement("img");
image.src = "./images/nigerian-flag.jpg";
image.width = 200;
image.height = 280;
image.classList.add("added")

photo.appendChild(image);


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