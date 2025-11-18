// Set a cookie
function setCookie() {
    document.cookie = "username=Student123; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
    alert("Cookie has been set! Reload the page to see it.");
}

// Get the cookie
function getCookie(name) {
    let cname = name + "=";
    let decoded = decodeURIComponent(document.cookie);
    let parts = decoded.split(';');

    for (let i = 0; i < parts.length; i++) {
        let c = parts[i].trim();
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Show cookie on page load
window.onload = function() {
    let val = getCookie("username");
    if (val !== "") {
        document.getElementById("cookieDisplay").textContent = val;
    }
};
