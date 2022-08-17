const cardInner = document.querySelector('.card_inner')
const choose = document.querySelector('.choose')
const categorySection = document.querySelector('.category_section')
const chooseIcon = document.querySelector('.choose_icon')
const categoryes = document.querySelectorAll('.category')
const chooseRemove = document.querySelector('.choose_remove')
const search = document.querySelector('.search')
const payBox = document.querySelector('.pay_box')
const cardNumber = document.querySelector('.card_number')
const date = document.querySelector('.date')
const cvv2 = document.querySelector('.cvv2')
const inputs = document.querySelectorAll('.input')
const payBtn = document.querySelector('.payBtn')
const cardNumberLabel = document.querySelector('.card_number__label')
const dateLabel = document.querySelector('.date__label')
const css2Label = document.querySelector('.css2__label')
const method = document.querySelectorAll('.method')
const amountPayable = document.querySelector('.amount_payable')
const commissionAmount = document.querySelector('.commission_amount')
const writeoffAmount = document.querySelector('.writeoff_amount')
const payBoxClose = document.querySelector('.pay_box__close')

choose.addEventListener('click', () => {
    choose.classList.toggle('choose_active')
    categorySection.classList.toggle('category_section_active')
    chooseIcon.classList.toggle('choose_icon_active')
})

categoryes.forEach(item => {
    item.addEventListener('click', () => {
        choose.textContent = item.textContent
        chooseIcon.style.display = 'none'
        chooseRemove.style.display = 'block'
        choose.classList.toggle('choose_active')
        categorySection.classList.toggle('category_section_active')
    })

    chooseRemove.addEventListener('click', () => {
        choose.textContent = 'Category'
        chooseIcon.style.display = 'block'
        chooseRemove.style.display = 'none'
        chooseIcon.classList.remove('choose_icon_active')
    })
})

// ---------------------------------------------------------------

const data = JSON.parse(localStorage.getItem('merch'))

const promise = new Promise((resolve, reject) => {
    const addToDom = data.map((data) => setCard(data)).join('')
    cardInner.innerHTML = addToDom

    searchFun(data)
    resolve()
}) 
.then(resolve => {
    const orderBtn = document.querySelectorAll('.orderBtn')

    orderBtn.forEach(item => {
        item.addEventListener('click', () => {
            let priceAmount = item.closest('.slider__card').querySelector('.price').textContent
            amountPayable.textContent = priceAmount
            commissionAmount.textContent
            writeoffAmount.textContent = parseInt(priceAmount + commissionAmount) + '.00'

            payBox.classList.remove('pay_boxShowHide')

            payBoxClose.addEventListener('click', () => payBox.classList.add('pay_boxShowHide'))
        })
    })
})

function setCard({key, frontImg, backImg, title, price}) {
    return `
    <div data-delete="${key}" class="slider__card">
        <div class="images">
            <img class="front" src="${frontImg}" alt="">
            <img class="back" src="${backImg}" alt="">
        </div>
        <h2 class="title">${title}</h2>
        <h2 class="price">${price}</h2>
        <button class="orderBtn">MAKE ORDER</button>
    </div>
    `
}

// ---------------------------------------------------------------

function searchFun(data) {
    search.addEventListener('input', e => {
        const value = e.target.value.toLowerCase()
        let newData = data.filter(( {title} ) => {
            return title.toLowerCase().includes(value)
        }) 

        cardInner.innerHTML = newData.map((data) => setCard(data)).join()
    })
}

// ---------------------------------------------------------------

const numReg = /[A-Za-zA-Яа-яЁё]/g

payBtn.addEventListener('click', () => {
    addRemoveError()
})

function addRemoveError() {
    cardNumber.value == '' ? cardNumber.classList.add('_error') : cardNumber.classList.remove('_error')
    date.value == '' ? date.classList.add('_error') : date.classList.remove('_error')
    cvv2.value == '' ? cvv2.classList.add('_error') : cvv2.classList.remove('_error')
}

inputs.forEach(item => {
    item.oninput = function() {
        item.value = item.value.replace(numReg, '')
    }
})

function methodChoise() {
    method.forEach(elem => {
        elem.classList.remove('method_active')
        this.classList.add('method_active')
    })
}
method.forEach(elem => elem.addEventListener('click', methodChoise))

// ---------------------------------------------------------------

// function luhnAlgorithm(value) {
//     value = value.replace(/\D/g, '');

//     var nCheck = 0;
//     var bEven = false;

//     for (var n = value.length - 1; n >= 0; n--) {
//         var nDigit = parseInt(value.charAt(n), 10);

//         if (bEven && (nDigit *= 2) > 9) {
//             nDigit -= 9;
//         }

//         nCheck += nDigit;
//         bEven = !bEven;
//     }

//     return (nCheck % 10) == 0;
// }