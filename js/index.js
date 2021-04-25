const mobileMenu = document.querySelector('.mb-menu');
const navItem = document.getElementsByClassName('navigation__item');
// const aboutTitle = document.querySelector('.about--title');


for (i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function () {
    mobileMenu.classList.remove('activo')
  })
}

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('activo')
});


$(document).ready(function () {

  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if ($(window).scrollTop() > 50) {
      if (st > lastScrollTop) {
        $('header').addClass('oculto');
      } else {
        $('header').removeClass('oculto');
      }
    }
    if ($(window).scrollTop() > 100) {
      $('header').addClass('solido');
    } else {
      $('header').removeClass('solido');
    }
    lastScrollTop = st;
  });
});

