function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setTheme(){
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let body = document.getElementsByTagName("BODY")[0];
    let logo = document.getElementsByClassName("logo")[0];

    let colorHeaderAndFooter = getCookie('headerColor');
    let bodyColor = getCookie('bodyColor');
    let logoColor = getCookie('logoColor');

    if (colorHeaderAndFooter != '') {
        header.style.backgroundColor = colorHeaderAndFooter;
        footer.style.backgroundColor = colorHeaderAndFooter;
    }

    if (bodyColor != '') {
        body.style.backgroundColor = bodyColor;
    }

    if (logoColor != '') {
        logo.style.color = logoColor;
    }

}

document.addEventListener("click", setTheme());