const wp = document.querySelector('.wp');
const menu = document.querySelector('.nav');



wp.addEventListener('click' , ()=>{
  menu.classList.toggle("show")
})

window.addEventListener('click', e=>{
  if(menu.classList.contains('show') && e.target != menu && e.target != wp)
  {
    menu.classList.toggle("show")

  }

})
