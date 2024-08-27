const shw = document.querySelector('.show')
const mainbtn = document.querySelector('.GEN-BTN')
const pwd = document.querySelector('#Input')

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*()-_+=';
const numbers = '0123456789';
let length = 8;
let allchar = uppercaseLetters + lowercaseLetters + symbols + numbers;


function CreatePassword() {
    let password = ''
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)] 
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)]
    }
    pwd.value = password;
    console.log(password);
}

// CreatePassword();

let btnClicked = false
shw.addEventListener('click', function () {
    if (!btnClicked) {
        pwd.type = 'password';
        shw.innerHTML ='Show'
        btnClicked = true
    } else {
        pwd.type = 'text';
        shw.innerHTML = 'Hide'
        btnClicked = false
    }

})