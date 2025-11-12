button = document.getElementById('button-trailer')

button.addEventListener('click', () => {
    div = document.getElementById('modal')
    div.classList.remove('hidden')
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



