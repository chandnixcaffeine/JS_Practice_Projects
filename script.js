const date = new Date()

const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","April","May","June","July","Auguast","September","October","November","December"]

document.querySelector("#date").innerHTML = date.getDate()
document.querySelector("#day").innerHTML = day[date.getDay()]
document.querySelector("#month").innerHTML = months[date.getMonth()]
document.querySelector("#year").innerHTML = date.getFullYear()
