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

    // var ss_form = {'account': 'MzawMDGzMDMzBwA', 'formID': 'M0lNtExNNE7TTUtOttQ1MTCy0LU0TDbRNUhMNE-1NDI1tUxKBgA'};
    // ss_form.width = '100%';
    // ss_form.height = '1000';
    // ss_form.domain = 'app-3QNEZVUMOI.marketingautomation.services';
    // // ss_form.hidden = ss_form.hidden = {'_usePlaceholders': true}, {'field_id': 'value'}; // Modify this for sending hidden variables, or overriding values
    // // ss_form.target_id = 'target'; // Optional parameter: forms will be placed inside the element with the specified id
    // // ss_form.polling = true; // Optional parameter: set to true ONLY if your page loads dynamically and the id needs to be polled continually.
