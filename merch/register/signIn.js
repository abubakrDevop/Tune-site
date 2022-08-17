const inputsIn = document.querySelectorAll('.input_in')
const nameIn = document.querySelector('.name_in')
const emailIn = document.querySelector('.email_in')
const passwordIn = document.querySelector('.password_in')
const loginBtn = document.querySelector('.loginBtn')

// -----------------------------------------------------------------------------

loginBtn.addEventListener('click', () => {
    addErrors()

    if (nameIn.value > '' && emailIn.value > '' && passwordIn.value > '') {
        emailValidate()
    }
})

function addErrors() {
    nameIn.value == '' ? nameIn.classList.add('_error') : nameIn.classList.remove('_error')
    emailIn.value == '' ? emailIn.classList.add('_error') : emailIn.classList.remove('_error')
    passwordIn.value == '' ? passwordIn.classList.add('_error') : passwordIn.classList.remove('_error')
}

function emailValidate() {
    if (emailIn.value.match(emailReg)) {
        emailIn.classList.remove('_error')
        getUser()

        setTimeout(() => {
            inputsIn.forEach(item => {})
        }, 1000)
    } else {
        emailIn.classList.add('_error')
    }
}

// -----------------------------------------------------------------------------

function getUser() {
    fetch(signIn, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: emailIn.value,
            password: passwordIn.value,
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