const container = document.querySelector('.container')
const paralax = document.querySelector('.paralax')
const paralaxTicked = document.querySelector('.paralaxTicked')
const header = document.querySelector('header')
const logo = document.querySelector('.logo')
const menuText = document.querySelector('ul')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const closeList = document.querySelector('.close_list')
const openList = document.querySelector('.open_list')
const list = document.querySelector('.list')
const videos = document.querySelectorAll('.video')
const youtube = document.querySelectorAll('.youtube')
const slider = document.querySelector('.slider')
const audio = document.querySelector('.audio')
const back = document.querySelector('.back')
const next = document.querySelector('.next')
const innerNameOfMusic = document.querySelector('.inner_nameOfMusic')
const timeOfMusic = document.querySelector('.time_ofMusic')
const progressBar = document.querySelector('.progress_bar')
const progress = document.querySelector('.progress')
const animation1 = document.querySelector('.animation1')
const animation2 = document.querySelector('.animation2')
const animation3 = document.querySelector('.animation3')
const animation4 = document.querySelector('.animation4')
const animation5 = document.querySelector('.animation5')
const animation6 = document.querySelector('.animation6')
const loader = document.querySelector('.loader')

// window.addEventListener('DOMContentLoaded', () => {
//     document.body.classList.add('_loaded')

//     setTimeout(() => {
//         loader.style.display = 'none'
//         container.style.display = 'block'
//     }, 5750)
// })

//------------------------------------------------------------------------------------------------

window.addEventListener('scroll', scrollTop)
function scrollTop() {
    const scrollIndex = window.scrollY / 2
    const scrollWindow = window.scrollY
    console.log(scrollWindow)

    paralax.style.transform = `translateY(${scrollIndex + 'px'})`
    paralaxTicked.style.transform = `translateY(${scrollIndex + 'px'})`
    
    if (scrollWindow >= 210) {
        header.classList.add('header_active')
        menuText.style.left = -230 + 'px'
        logo.style.display = 'block'
        animation1.classList.add('_animeText')
    } else {
        header.classList.remove('header_active')
        menuText.style.left = 35 + 'px'
        logo.style.display = 'none'
    }

    scrollWindow >= 900 ? animation2.classList.add('_animeText') : ''
    scrollWindow >= 1580 ? animation3.classList.add('_animeText') : ''
    scrollWindow >= 2250 ? animation4.classList.add('_animeText') : ''
    scrollWindow >= 2850 ? animation5.classList.add('_animeText') : ''
    scrollWindow >= 3520 ? animation6.classList.add('_animeText') : ''
}

//------------------------------------------------------------------------------------------------

videos.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.closest('.video').querySelector('.youtube').classList.add('_show')
    })
})

//------------------------------------------------------------------------------------------------

const images = ['./img/images.jpg', './img/images1.jpg', './img/images2.jpg', './img/images3.jpg', './img/images4.jpg', './img/images5.jpg']

setInterval(() => {
    let imagesSave = images[0]
    images.shift()
    images.push(imagesSave)

    slider.setAttribute('src', images[0])
}, 3000)

//------------------------------------------------------------------------------------------------

const musicArr = [
    {
        subtitle: 'Eminem feat. Snoop Dogg',
        title: 'From The D 2 The Lbc',
        url: './music/Eminem feat. Snoop Dogg - From The D 2 The Lbc.mp3',
    },
    {
        subtitle: 'Cardi B feat. Megan Thee Stallion',
        title: 'WAP',
        url:  './music/Cardi B feat. Megan Thee Stallion - WAP.mp3',
    },
    {
        subtitle: 'Ariana Grande',
        title: '7 Rings',
        url: './music/Ariana Grande - 7 Rings.mp3',
    },
    {
        subtitle: 'Omah Lay & Justin Bieber',
        title: 'Attention',
        url: './music/Omah Lay & Justin Bieber - Attention.mp3',
    },
]

let index = 0
let current
let currentTitle

const promise = new Promise(function(resolve, reject) {
    const addToDom = musicArr.map((data) => addMusic(data)).join('')
    list.innerHTML = addToDom

    function nextAudio() {
        index++

        current = musicArr[index].url
        currentTitle = musicArr[index].title
        audio.setAttribute('src', current)
        innerNameOfMusic.textContent = currentTitle

        playAudio()
        
        if (index >= musicArr.length -1) {
            index = 0
        }

        back.style.cursor = 'default'
    }

    function prevAudio() {
        index--

        current = musicArr[index].url
        currentTitle = musicArr[index].title
        audio.setAttribute('src', current)
        innerNameOfMusic.textContent = currentTitle

        playAudio()

        if (index <= 0) {
            index = musicArr.length
        }
    }
    
    next.addEventListener('click', nextAudio)
    back.addEventListener('click', prevAudio)

    resolve()
})
.then(result => {
    const music = document.querySelectorAll('.music')

    music.forEach(item => {
        item.addEventListener('click', () => {
            let title = item.closest('.music').querySelector('.title').textContent
            let dataSet = item.dataset['music']

            audio.setAttribute('src', dataSet)
            innerNameOfMusic.textContent = title

            playAudio()
        })
    })
})
.catch(error => console.error(error))

function addMusic({subtitle, title, url}) {
    return `
    <div data-music="${url}" class="music">
        <section class="name_box">
            <h4>${subtitle}</h4>
            <p class="title">${title}</p>
        </section>
        <section class="icon_box">
            <span><ion-icon name="logo-apple"></ion-icon></span>
            <span><ion-icon name="logo-amazon"></ion-icon></span>
            <span><ion-icon name="heart-outline"></ion-icon></span>
            <div class="time">00 : 00</div>
        </section>
    </div>
    `
}

play.addEventListener('click', playAudio)
pause.addEventListener('click', pauseAudio)

function playAudio() {
    play.classList.add('apear_disapear')
    pause.classList.remove('apear_disapear')
    audio.play()
}

function pauseAudio() {
    play.classList.remove('apear_disapear')
    pause.classList.add('apear_disapear')
    audio.pause()
}

audio.addEventListener('timeupdate', e => {
    const { duration, currentTime } = e.srcElement
    const progressData = (currentTime / duration) * 100
    let minutes = Math.floor(currentTime / 60) 
    let seconds = Math.floor(currentTime % 60) 

    minutes <= 9 ? minutes = '0' + minutes : ''
    seconds <= 9 ? seconds = '0' + seconds : ''
    
    timeOfMusic.textContent = `${minutes} : ${seconds}`
    progress.style.width = `${progressData}%`
})

function changeProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

progressBar.addEventListener('click', changeProgress)

//------------------------------------------------------------------------------------------------

openList.addEventListener('click', () => {
    openList.classList.add('apear_disapear')
    closeList.classList.remove('apear_disapear')
    list.classList.remove('listActive')

    closeList.addEventListener('click', () => {
        openList.classList.remove('apear_disapear')
        closeList.classList.add('apear_disapear')
        list.classList.add('listActive')
    })
})