const hamMenu = document.querySelector('.burgMenu')
const offScreenMenu = document.querySelector ('.off-screen-menu')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'),
    offScreenMenu.classList.toggle('active')

})
let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let backButton = document.getElementById('back')
let carousel = document.querySelector('.carousel')
let seeMoreButtons = document.querySelectorAll('#seeMore')
let listHTML = document.querySelector('.carousel .list')
nextButton.onclick = function (){
    showSlider('next') 
}
prevButton.onclick = function (){
    showSlider('prev') 
}
let unAcceptClick 
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none'
    prevButton.style.pointerEvents = 'none'
    prevButton 
    carousel.classList.remove('prev', 'next')
    let items = document.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    } else {
        let positionLast = items.length-1;
        listHTML.prepend(items[positionLast])
        carousel.classList.add('prev')
    }
    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(()=> {
        nextButton.style.pointerEvents = 'auto'
        prevButton.style.pointerEvents = 'auto'
    }, 2000)
}
seeMoreButtons.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail')
    }
})
backButton.onclick = function (){
    carousel.classList.remove('showDetail')
}

let myVideo = document.getElementById("video1"); 
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
function mute() {
    myVideo.muted = true
}
function unmute() {
    myVideo.muted = false
}
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link, button");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})