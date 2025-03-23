const hamMenu = document.querySelector('.burgMenu')
const offScreenMenu = document.querySelector ('.off-screen-menu')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'),
    offScreenMenu.classList.toggle('active')

})
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link, .button");

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