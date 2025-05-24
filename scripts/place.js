
function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        
    } else {
        return "N/A";
    }
}

const temperature = 5;
const windSpeed = 25;

const windChill = calculateWindChill(temperature, windSpeed);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wind-chill").innerHTML = `<strong>Wind Chill:</strong></li>
    <li class= "wind">${windChill.toFixed(2)}⁰C`
})

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