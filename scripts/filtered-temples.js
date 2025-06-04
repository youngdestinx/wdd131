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

// Dynamically add temple pictures through.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
 {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
 {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
},
 {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
},
   {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
},
];

const container = document.querySelector("section");

temples.forEach(temple => {
    const card = document.createElement("article");
    card.className = "temple-card";

    card.innerHTML = `
        <h2><strong>${temple.templeName}</strong></h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
    `;

    container.appendChild(card);
});

function filterTemples(criteria) {
    let filteredTemples;

    switch (criteria.toLowerCase()) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0].trim());
                return year < 1900;
            })
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0].trim());
                return year > 2000;
            })
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break; 
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;  
        case 'home':
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

function displayTemples(temples) {
    const container = document.querySelector("section");
    container.innerHTML = "";

    temples.forEach(temple => {
    const card = document.createElement("article");
    card.className = "temple-card";

    card.innerHTML = `
        <h2><strong>${temple.templeName}</strong></h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
    `;
        container.appendChild(card);
    })
}
