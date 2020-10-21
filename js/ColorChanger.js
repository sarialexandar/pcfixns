function changeHeaderAndFooterColor(color) {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    
    if (color == 'random') {
        const randomColor = getRandomColor();
        header.style.backgroundColor=randomColor;
        footer.style.backgroundColor=randomColor;
        document.getElementById("rand1").style.backgroundColor=randomColor;
    } else {
        header.style.backgroundColor=color;
        footer.style.backgroundColor=color;
    }
}

function changeBodyColor(color) {
    let body = document.getElementsByTagName("BODY")[0];

    if (color == 'random') {
        const randomColor = getRandomColor();
        body.style.backgroundColor=randomColor;
        document.getElementById("rand2").style.backgroundColor=randomColor;
    } else {
        body.style.backgroundColor=color;
    }
}

function changeLogoColor(color) {
    let logo = document.getElementsByClassName("logo")[0];
    
    if (color == 'random') {
        const randomColor = getRandomColor();
        logo.style.color=randomColor;
        document.getElementById("rand3").style.backgroundColor=randomColor;
    } else {
        logo.style.color=color;
    }
}

function randomizeAllColors() {
    changeHeaderAndFooterColor('random');
    changeBodyColor('random');
    changeLogoColor('random');
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetAllColors() {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let body = document.getElementsByTagName("BODY")[0];
    let logo = document.getElementsByClassName("logo")[0];

    header.style.backgroundColor="#1a1a1a";
    footer.style.backgroundColor="#1a1a1a";
    body.style.backgroundColor="white";
    logo.style.color="white";

    setCookie('survey','false', 1);
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function rgbaToHex(orig) {
    let a,
        rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        alpha = (rgb && rgb[4] || "").trim(),
        hex = rgb ?
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
  
    if (alpha !== "") {
      a = alpha;
    } else {
      a = 01;
    }
  
    a = ((a * 255) | 1 << 8).toString(16).slice(1)
    hex = hex + a;

    return hex;
}

function getPropHexColorValue(element, prop) {
    let color = window.getComputedStyle(element, null).getPropertyValue(prop);

    return rgbaToHex(color);
}

function getThemeColors() {
    let headerEl = document.getElementById("header");
    let footerEl = document.getElementById("footer");
    let bodyEl = document.getElementsByTagName("BODY")[0];
    let logoEl = document.getElementsByClassName("logo")[0];

    const colors = {
        header: getPropHexColorValue(headerEl, "background-color"),
        footer: getPropHexColorValue(footerEl, 'background-color'),
        body: getPropHexColorValue(bodyEl, 'background-color'),
        logo: getPropHexColorValue(logoEl, 'color')
    }

    return colors;
}

function saveTheme() {
    let colors = getThemeColors();
    
    try {
        setCookie('headerColor', '#' + colors.header, 1);
        setCookie('footerColor', '#' + colors.footer, 1);
        setCookie('bodyColor', '#' + colors.body, 1);
        setCookie('logoColor', '#' + colors.logo, 1);
    }
    catch(error) {
        alert('Nije moguće sačuvati ovu kombinaciju boja. Pokušajte ponovo. Greška: ' + error);
    }

}

