globalThis.timerShedule;

function update(){
    let min = parseInt(document.getElementById("min").innerHTML, 10);
    let sec = parseInt(document.getElementById("sec").innerHTML, 10);

    if (sec === 59) {
        min++;
        sec = 0;
    } else {
        sec++;
    }
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = String(sec).padStart(2, '0');
}

function start(){
    timerShedule = setInterval(update, 1000);
}

function stop(){
    clearInterval(timerShedule);
    let min = parseInt(document.getElementById("min").innerHTML, 10);
    let sec = parseInt(document.getElementById("sec").innerHTML, 10);
    let total = (min * 60) + sec;
    document.cookie = "time=" + total + "; max-age=34560000;";
}