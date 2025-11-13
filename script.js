const button = document.getElementById('button-trailer')

const div = document.getElementById('modal')
const buttonExit = document.getElementById('exit-message')
const video = document.getElementById('video')

const buttonMaps = document.getElementById('btn-maps')
const containerMaps = document.getElementById('maps')
const botonSalida = document.getElementById('exit-maps')


buttonMaps.addEventListener('click', () => {
    containerMaps.classList.remove('hidden')
    containerMaps.classList.add('show-modal')
    main = document.querySelector('main');
    header = document.querySelector('header');
    footer = document.querySelector('footer')
    main.classList.add('blur-background');
    header.classList.add('blur-background');
    footer.classList.add('blur-background');
    hero = document.getElementById('hero');
    hero.classList.add('blur-background')
})


botonSalida.addEventListener('click', () => {
    containerMaps.classList.add('hidden')
    buttonExit.classList.add('hidden')
    containerMaps.classList.remove('show-modal')
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer')
    main.classList.remove('blur-background');
    header.classList.remove('blur-background');
    footer.classList.remove('blur-background');
    hero = document.getElementById('hero');
    hero.classList.remove('blur-background')

    if (video) {
    video.contentWindow.postMessage(
      '{"event":"command", "func":"pauseVideo", "args":""}', 
      '*'
    );
  }
})



button.addEventListener('click', () => {
    div.classList.remove('hidden')
    buttonExit.classList.remove('hidden')
    video.classList.remove('hidden')
    div.classList.add('show-modal')
    main.classList.add('blur-background');
    header.classList.add('blur-background');
    footer.classList.add('blur-background');
    hero = document.getElementById('hero');
    hero.classList.add('blur-background')

     if (video) {
    video.contentWindow.postMessage(
      '{"event":"command", "func":"playVideo", "args":""}', 
      '*'
    );
  }
})


buttonExit.addEventListener('click', () => {
    div.classList.add('hidden')
    buttonExit.classList.add('hidden')
    video.classList.add('hidden')
    div.classList.remove('show-modal')
    main.classList.remove('blur-background');
    header.classList.remove('blur-background');
    footer.classList.remove('blur-background');
    hero = document.getElementById('hero');
    hero.classList.remove('blur-background')

    if (video) {
    video.contentWindow.postMessage(
      '{"event":"command", "func":"pauseVideo", "args":""}', 
      '*'
    );
  }
})


const buttonCartelera = document.getElementById('btn-cartelera');
console.log('buttonCartelera')

buttonCartelera.addEventListener('click', () => {

        
    const hero = document.getElementById('hero')
    hero.classList.add('hidden')
    hero.classList.remove('hero')

    const modTittle = document.getElementById('tittle-films');
    modTittle.innerHTML = 'Cartelera'

    const container = document.getElementById('container-cards');
    container.classList.remove('container-cards')
    container.classList.add('container-cards-grids')

})

const menuMobile = document.getElementById('menuMobile')
const buttonMobile = document.getElementById('buttonMobile')

buttonMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
    buttonMobile.classList.toggle('active')
    containerMaps.classList.add('sobreponer')
});

const btnCarteleraMobile = document.getElementById('btn-cartelera-mbl');
const btnMapsMobile = document.getElementById('btn-maps-mbl')

btnCarteleraMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    buttonMobile.classList.remove('active')
    buttonCartelera.click()
})

btnMapsMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    buttonMobile.classList.remove('active')
    buttonMaps.click()
})


