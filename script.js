let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("time").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()]
    document.getElementById("day").innerHTML = curWeekDay;

    var curDay = today.getDate();
    var curMonth = today.getMonth();
    var curYear = today.getFullYear();
    var date = curDay+"-"+curMonth+"-"+curYear;
    document.getElementById("date").innerHTML = date;
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}