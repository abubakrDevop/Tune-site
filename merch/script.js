const header = document.querySelector('header')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
const choseImage1 = document.querySelector('.chose__image1')
const choseImage2 = document.querySelector('.chose__image2')
const viewImage = document.querySelector('.view__image')
const commentsInner = document.querySelector('.comments__inner')
const inputs = document.querySelectorAll('.input')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const comment = document.querySelector('.comment')
const sendBtn = document.querySelector('.sendBtn')
const date = document.querySelector('.date')
const navigatorText = document.querySelectorAll('.navigator_text')
const des = document.querySelector('.des')
const rev = document.querySelector('.rev')
const description = document.querySelector('.description')
const commentsBox = document.querySelector('.comments')
const commCount = document.querySelector('.comm_count')
const sliderBox = document.querySelector('.slider__box')
const left = document.querySelector('.left')
const center = document.querySelector('.center')
const right = document.querySelector('.right')
const button = document.querySelectorAll('.button')
const getImages = document.querySelectorAll('.slider__card')

window.addEventListener('DOMContentLoaded', () => {
    if (!getItem('merch')) {
        setItem('merch', [])
    }
})

function setItem (key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

function getItem (key) {
    return JSON.parse(localStorage.getItem(key))
}

// ---------------------------------------------------------------------------

window.addEventListener('scroll', scrollWindow)
function scrollWindow() {
    const scrollIndex = window.scrollY

    if (scrollIndex >= 200) {
        header.classList.add('header_active')
    } else {
        header.classList.remove('header_active')
    }
}

let images = ['https://preview.wolfthemes.live/app/uploads/sites/5/2013/06/hoodie_3_front.jpg', 
              'https://preview.wolfthemes.live/app/uploads/sites/5/2013/06/hoodie_3_back-400x400.jpg']
let index = 0
let key = 0

next.addEventListener('click', () => {
    next.classList.add('show_button')
    back.classList.remove('show_button')
    choseImage1.classList.add('chose_active')
    choseImage2.classList.remove('chose_active')

    images[index++]

    viewImage.setAttribute('src', images[index])
})

back.addEventListener('click', () => {
    back.classList.add('show_button')
    next.classList.remove('show_button')
    choseImage2.classList.add('chose_active')
    choseImage1.classList.remove('chose_active')

    images[index--]

    viewImage.setAttribute('src', images[index])
})

getImages.forEach(item => {
    item.addEventListener('click', () => {
        let front = item.querySelector('.front').getAttribute('src')
        let back = item.querySelector('.back').getAttribute('src')
        let title = item.querySelector('.title').textContent
        let price = item.querySelector('.price').textContent

        viewImage.setAttribute('src', front)
        choseImage1.setAttribute('src', front)
        choseImage2.setAttribute('src', back)

        images[0] = front
        images[1] = back
        key++

        const saveItem = getItem('merch')
        setItem('merch', [
            ...saveItem, {
                key: key,
                frontImg: front,
                backImg: back,
                title: title,
                price: price,
            }
        ])
    })
})

// ---------------------------------------------------------------------------

    function navigation() {
        navigatorText.forEach(item => {
            item.classList.remove('nav_active')
            this.classList.add('nav_active')
        })
    }
    navigatorText.forEach(item => item.addEventListener('click', navigation))

    rev.addEventListener('click', () => {
        description.classList.add('active')
        commentsBox.classList.remove('active')

        des.addEventListener('click', () => {
            description.classList.remove('active')
            commentsBox.classList.add('active')
        })
    })

// ---------------------------------------------------------------------------

let passwordReg = /[A-Za-zA-Яа-яЁё]/g
let emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g

sendBtn.addEventListener('click', () => {
    addRemoveError()
    emailValidate()
})

function addComment() {
    commentsInner.innerHTML += 
    `
    <div class="comm__box">
        <img src="./image/person.jpg" alt="">
        <section>
            <h4>${name.value} - <span>${date.value}</span></h4>
            <p>${comment.value}</p>
        </section>
    </div>    
    `    
}

let count = 0

function emailValidate() {
    if (email.value.match(emailReg)) {
        count++

        email.classList.remove('_error')
        commCount.textContent = count

        if (name.value > '' && email.value > '' && comment.value > '' && date.value > '') {
            addComment()
            
            inputs.forEach(input => input = '')
        }
    } else {
        email.classList.add('_error')
    }
}

function addRemoveError() {
    name.value == '' ? name.classList.add('_error') : name.classList.remove('_error')
    email.value == '' ? email.classList.add('_error') : email.classList.remove('_error')
    comment.value == '' ? comment.classList.add('_error') : comment.classList.remove('_error')
    date.value == '' ? date.classList.add('_error') : date.classList.remove('_error')
}

// ---------------------------------------------------------------------------

function buttonActive() {
    button.forEach(item => {
        item.classList.remove('button_active')
        this.classList.add('button_active')
    })
}
button.forEach(item => item.addEventListener('click', buttonActive))

left.addEventListener('click', () => {
    sliderBox.style.left = -0.8 + 'vw'
})
center.addEventListener('click', () => {
    sliderBox.style.left = -96 + 'vw'
})
right.addEventListener('click', () => {
    sliderBox.style.left = -191.6 + 'vw'
})

// ---------------------------------------------------------------------------

