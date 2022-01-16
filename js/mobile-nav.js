const navSlide = () => {
  var nav = document.getElementById('nav')
  var menubutton = document.getElementById('menubutton')

  menubutton.addEventListener('click', () =>{
    nav.classList.toggle('nav-active')
  })
}

navSlide();
