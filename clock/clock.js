function clock(){

const date = new Date();

const hour = date.getHours().toString().padStart(2,0);
const minute = date.getMinutes().toString().padStart(2,0);
const second = date.getSeconds().toString().padStart(2,0);

const time = `${hour}:${minute}:${second}`; // describes the format of time

document.getElementById("clock").textContent = time;
}


clock();

setInterval(clock, 1000); // will update in every second

