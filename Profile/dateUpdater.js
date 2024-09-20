const monthNameE1 = document.getElementById("month-name");
const dayNameE1 = document.getElementById("day-name");
const dayNumE1 = document.getElementById("day-number");
const yearE1 = document.getElementById("year");

const date = new Date();

const month = date.getMonth(); 
const day = date.getDate();
const year = date.getFullYear();
monthNameE1.innerText = date.toLocaleString("en", {
    month: "long"
}); 
dayNumE1.innerText = date.toLocaleString("en",{
    weekday: "long"
});
dayNumE1.innerText = date.getDate()
yearE1.innerText = date.getFullYear()