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
    //alert("You do not yet mave a recrded time, redirecting to stopwatch");
    //window.location.replace("stopwatch/");
    const startTime = 20;
    let t = startTime;
    let min = Math.floor(t / 60);
    let sec = t - (min * 60);
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}

function update(){
    let min = parseInt(document.getElementById("min"));
    let sec = parseInt(document.getElementById("sec"));

    if (sec !== 0) {
        if (min !== 0) {
            clearInterval(timerShedule);
        } else {
            min--;
            sec = 59;
            document.getElementById("min").innerHTML = min;
            if (sec < 10){
                document.getElementById("sec").innerHTML = "0" + sec;
            } else {
                document.getElementById("sec").innerHTML = sec;
            }
        }
    } else {
        sec--;
        document.getElementById("min").innerHTML = min;
        if (sec < 10){
            document.getElementById("sec").innerHTML = "0" + sec;
        } else {
            document.getElementById("sec").innerHTML = sec;
        }
    }
}

function start() {
    const timerShedule = setInterval(update(), 1000);
}