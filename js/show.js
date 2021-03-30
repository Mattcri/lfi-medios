let animate = document.querySelectorAll('.show-txt');

function showTitle() {
  let scrollTop = document.documentElement.scrollTop;

  for (let s = 0; s < animate.length; s++) {
    let height = animate[s].offsetTop;
    if (height < scrollTop) {
      animate[s].style.opacity = 1
    }
  }

}

window.addEventListener('scroll', showTitle);