const hamMenu = document.querySelector('.burgMenu')
const offScreenMenu = document.querySelector ('.off-screen-menu')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'),
    offScreenMenu.classList.toggle('active')

})