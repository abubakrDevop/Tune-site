const prevSlide = document.querySelector('.prev_slide')
const nextSlide = document.querySelector('.next_slide')
const pauseBtn = document.querySelector('.pause-btn')
const playBtn = document.querySelector('.play-btn')
const turnOff = document.querySelector('.turn-off')
const turnOn = document.querySelector('.turn-on')


prevSlide.addEventListener('click', () => {
    prevSlide.classList.add('prev_slide_active')
    setTimeout(() => {prevSlide.classList.remove('prev_slide_active')}, 500)
})
nextSlide.addEventListener('click', () => {
    nextSlide.classList.add('next_slide_active')
    setTimeout(() => {nextSlide.classList.remove('next_slide_active')}, 500)
})

playBtn.addEventListener('click', () => {
    playBtn.classList.add('play-btns_controll')
    pauseBtn.classList.remove('play-btns_controll')

    pauseBtn.addEventListener('click', () => {
        playBtn.classList.remove('play-btns_controll')
        pauseBtn.classList.add('play-btns_controll')
    })
})

turnOn.addEventListener('click', () => {
    turnOn.classList.add('volume_controll')
    turnOff.classList.remove('volume_controll')

    turnOff.addEventListener('click', () => {
        turnOn.classList.remove('volume_controll')
        turnOff.classList.add('volume_controll')
    })
})