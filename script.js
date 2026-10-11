function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function cookieExists(name) {
  return document.cookie.split('; ').some(row => row.startsWith(`${name}=`));
}
