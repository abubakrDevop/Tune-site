const logupBox = document.querySelector('.logup_box')
const loginBox = document.querySelector('.login_box')
const linkBtn = document.querySelectorAll('.linkBtn')
const inputs = document.querySelectorAll('.input_up')
const nameUp = document.querySelector('.name_up')
const emailUp = document.querySelector('.email_up')
const password1Up = document.querySelector('.password1_up')
const password2Up = document.querySelector('.password2_up')
const buttonUp = document.querySelector('.button_up')

// -----------------------------------------------------------------------------

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

    if (nameUp.value > '' && emailUp.value > '' && password1Up.value > '' && password2Up.value > '') {
        if (password1Up.value === password2Up.value) {
            emailValidation()
        } else {
            password1Up.classList.add('_error')
            password2Up.classList.add('_error')
        }
    }
})

function addError() {
    nameUp.value == '' ? nameUp.classList.add('_error') : nameUp.classList.remove('_error')
    emailUp.value == '' ? emailUp.classList.add('_error') : emailUp.classList.remove('_error')
    password1Up.value == '' ? password1Up.classList.add('_error') : password1Up.classList.remove('_error')
    password2Up.value == '' ? password2Up.classList.add('_error') : password2Up.classList.remove('_error')
}

const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function emailValidation() {
    if (emailUp.value.match(emailReg)) {
        emailUp.classList.remove('_error')
        postUser()
        setTimeout(() => {
            inputs.forEach(item => item.value = '')
        }, 1000)
    } else {
        emailUp.classList.add('_error')
    }
}

// -----------------------------------------------------------------------------

function postUser() {
    fetch(signUp, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: emailUp.value,
            password: password1Up.value,
            returnSecureToken: true
        }) 
    })
        .then(res => res.json())
        .then(data => {
            if (data.registered === true) {
                window.location.href = 'file:///home/aubakr/Desktop/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/MY%20work/All/Tune%20site/index.html'
            }
        })
        .catch(error => console.error())
}