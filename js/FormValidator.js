let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let subjectInput = document.querySelector('#subject');
let textareaInput = document.querySelector('#textarea');
let submit = document.getElementById('submit');

function validateEmail(email){
    let reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!email.match(reg)) {
        return false;
    }
    return true;
}

function submitForm() {
    alert('Uspešno ste poslali Vaš problem. Očekujte odgovor uskoro.');
}

form.addEventListener('input', function()
{
    let nameValid = false;
    let emailValid = false;
    let subjectValid = false;
    let textareaValid = false;

    if(nameInput.value.length < 10) {
        nameInput.classList.add("invalid-input");
    } else {
        nameInput.classList.remove("invalid-input");
        nameValid = true;
    }

    if(!validateEmail(emailInput.value)) {
        emailInput.classList.add("invalid-input");
    } else {
        emailInput.classList.remove("invalid-input");
        emailValid = true;
    }

    if(subjectInput.value.length < 10) {
        subjectInput.classList.add("invalid-input");
    } else {
        subjectInput.classList.remove("invalid-input");
        subjectValid = true;
    }

    if(textareaInput.value.length < 20) {
        textareaInput.classList.add("invalid-input");
    } else {
        textareaInput.classList.remove("invalid-input");
        textareaValid = true;
    }

    if (nameValid && subjectValid && textareaValid && emailValid) {
        submit.disabled = false;
        submit.classList.remove("disabled");
    } else {
        submit.disabled = true;
        submit.classList.add("disabled");
    }

});

