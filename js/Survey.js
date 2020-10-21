let modal = document.getElementById("modal");
let modalBtn = document.getElementById("modal-button");
let close = document.getElementById("close-modal");

close.onclick = function() {
    modal.style.display = "none";
}


setTimeout(function(){
    let surveyCookie = getCookie('survey');
    
    if (surveyCookie !== 'true'){
        modal.style.display = "block";
    }
},3000);


function submitForm() {
    alert('Hvala Vam što ste popunili anketu.');
}

let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let tab = document.getElementsByClassName("tab");
    tab[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    
    if (n == (tab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {
    let tab = document.getElementsByClassName("tab");
  
    if (n == 1 && !validateForm()) { 
        return false;
    }

    tab[currentTab].style.display = "none";
  
    currentTab = currentTab + n;
 
    if (currentTab >= tab.length) {
        setCookie('survey', true, 1);
        document.getElementById("surveyForm").submit(submitForm());
        return false;
    }
  
    showTab(currentTab);
}

function validateForm() {
    let tab, y, i, valid = true;
    tab = document.getElementsByClassName("tab");
    y = tab[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}