let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let tray = document.getElementsById("tray")[0]
let tray1 = document.getElementsById("tray1")[0]

start.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

tray1.addEventListener("click", ()=>{
    if(tray.style.bottom == "50px"){
        tray.style.bottom = "-655px"
    }
    else{
        tray.style.bottom = "50px"
    }
})

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    document.getElementById("time").innerHTML = hr + " : " + min ;
    var time = setTimeout(function(){ startTime() }, 500);

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