const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Get the select element
const select = document.querySelector("select");

// Populate options
products.forEach((product)=>{
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;

    select.appendChild(option);
});

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