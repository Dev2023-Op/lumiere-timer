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
} else {
    //alert("You do not yet mave a recrded time, redirecting to stopwatch");
    //window.location.replace("stopwatch/");
}