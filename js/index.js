const mobileMenu = document.querySelector('.mb-menu');
const navItem = document.getElementsByClassName('navigation__item');
const aboutTitle = document.querySelector('.about--title');


for (i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function () {
    mobileMenu.classList.remove('activo')
  })
}

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('activo')
});


window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;

  switch (true) {
    case scrolled >= 1300:
      aboutTitle.classList.remove('fixed');
      break;
    case scrolled >= 900:
      aboutTitle.classList.add('fixed');
      break;
    
    default:
      aboutTitle.classList.remove('fixed');
  }
  
})

