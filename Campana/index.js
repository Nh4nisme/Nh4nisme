let text = document.getElementById('text')
let earth = document.getElementById('earth')
let text1 = document.getElementById('texts')

window.addEventListener('scroll',()=>{
  let value = window.scrollY;

  text.style.marginLeft = value * -0.5 + 'px'
  earth.style.top = value * -1.5 + 'px'
  text1.style.marginLeft = value * -1 + 'px'
});