function countdown(){
    setInterval(function(){

        let birthdate = new Date("may 14, 2025, 12:00:00").getTime();
        let currentdate = new Date().getTime();

        let diff = birthdate - currentdate;

        let day = Math.floor(diff / (1000*60*60*24));
        console.log(day)

        let hrs = Math.floor(diff % (1000*60*60*24) / (1000*60*60))
        console.log(hrs)

        let mins = Math.floor(diff % (1000*60*60) / (1000*60))
        console.log(mins)

        let sec = Math.floor(diff % (1000*60) / (1000))
        console.log(sec)

        document.getElementById("day").innerHTML = day + "</br>" + "Day";
        document.getElementById("hrs").innerHTML = hrs + "</br>" + "Hours";
        document.getElementById("mins").innerHTML = mins + "</br>" + "Minutes";
        document.getElementById("sec").innerHTML = sec + "</br>" + "Seconds";

    },1000)

}

countdown();