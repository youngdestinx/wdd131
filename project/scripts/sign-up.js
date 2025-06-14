const products = [
  {
    name: "Daily"
  },
  {
    name: "Weekly"
  },
  {
    name: "Biweekly"
  },
  {
    name: "Monthly"
  },
  {
    name: "Quaterly"
  }
];

// Get the select element
const select = document.querySelector("select");

// Populate options
products.forEach((product)=>{
    const option = document.createElement("option");
    option.value = product.name;
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