new WOW().init();

if ($('.carrusel-5').length) {
  [].forEach.call(document.querySelectorAll('.carrusel-5'), function (el) {
    tns({
      container: el,
      items: 5,
      slideBy: 1,
      gutter: 15,
      controls: true,
      nav: false,
      navPosition: 'bottom',
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        640: {
          items: 3
        },
        767: {
          items: 4
        },
        900: {
          items: 5
        }
      }
    });
  });
}