const logupBox = document.querySelector('.logup_box')
const loginBox = document.querySelector('.login_box')
const linkBtn = document.querySelectorAll('.linkBtn')
const inputUp = document.querySelectorAll('.input_up')
const nameUp = document.querySelector('.name_up')
const emailUp = document.querySelector('.email_up')
const password1Up = document.querySelector('.password1_up')
const password2Up = document.querySelector('.password2_up')
const buttonUp = document.querySelector('.button_up')

const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

linkBtn.forEach(item => {
    item.addEventListener('click', () => {
        logupBox.classList.toggle('active')
        loginBox.classList.toggle('active')
    })
})

// -----------------------------------------------------------------------------

buttonUp.addEventListener('click', (e) => {
    e.preventDefault()

    addError()
    emailValidation()
})

function addError() {
    nameUp.value == '' ? nameUp.classList.add('_error') : nameUp.classList.remove('_error')
    emailUp.value == '' ? emailUp.classList.add('_error') : emailUp.classList.remove('_error')
    password1Up.value == '' ? password1Up.classList.add('_error') : password1Up.classList.remove('_error')
    password2Up.value == '' ? password2Up.classList.add('_error') : password2Up.classList.remove('_error')
}

function emailValidation() {
    if (emailUp.value.match(emailReg)) {
        emailUp.classList.remove('_error')
    } else {
        emailUp.classList.add('_error')
    }
}

// -----------------------------------------------------------------------------

fetch('')
    .then(res => res.json())
    .then(data => {

    })
    .catch(error => consolee)