button = document.getElementById('button-trailer')

div = document.getElementById('modal')
buttonExit = document.getElementById('exit-message')
video = document.getElementById('video')

button.addEventListener('click', () => {
    div.classList.remove('hidden')
    buttonExit.classList.remove('hidden')
    video.classList.remove('hidden')
    div.classList.add('show-modal')
    main = document.querySelector('main');
    header = document.querySelector('header');
    footer = document.querySelector('footer')
    main.classList.add('blur-background');
    header.classList.add('blur-background');
    footer.classList.add('blur-background');
    hero = document.getElementById('hero');
    hero.classList.add('blur-background')
})


buttonExit.addEventListener('click', () => {
    div.classList.add('hidden')
    buttonExit.classList.add('hidden')
    video.classList.add('hidden')
    div.classList.remove('show-modal')
    main = document.querySelector('main');
    header = document.querySelector('header');
    footer = document.querySelector('footer')
    main.classList.remove('blur-background');
    header.classList.remove('blur-background');
    footer.classList.remove('blur-background');
    hero = document.getElementById('hero');
    hero.classList.remove('blur-background')
})



