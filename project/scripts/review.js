let count = localStorage.getItem("submissions");

if (count === null) {
    count = 0;
} else {
    count = parseInt(count);
}
count++;

localStorage.setItem("form Submission", count.toString());

document.getElementById("submissions").innerText = "You have submitted the form" + " " + count + "time(s)"