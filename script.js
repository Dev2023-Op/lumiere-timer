function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function cookieExists(name) {
    return document.cookie.split('; ').some(row => row.startsWith(`${name}=`));
}

if (cookieExists("time")) {
    const startTime = parseInt(getCookie("time"));
    let t = startTime;
    let min = Math.floor(t / 60);
    let sec = t - (min * 60);
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
} else {
    alert("You do not yet mave a recorded time, redirecting to stopwatch");
    //window.location.replace("stopwatch/");
}

function update(){
    let min = parseInt(document.getElementById("min").innerHTML, 10);
    let sec = parseInt(document.getElementById("sec").innerHTML, 10);

    if (min === 0 && sec === 0) {
        clearInterval(timerSchedule);
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "00";
        return;
    }

    if (sec === 0) {
        min--;
        sec = 59;
    } else {
        sec--;
    }
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = String(sec).padStart(2, '0');
}

function start(){
    let timerShedule = setInterval(update, 1000);
}