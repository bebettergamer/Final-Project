// Fade On Scroll

function fadeOnScroll(element) {
  if (!element) {
    return;
  }

  var element = document.getElementById("section");
  var element2 = document.getElementById("section-two");
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var distanceToTop2 =
    window.pageYOffset + element2.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var elementHeight2 = element2.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  var opacity = 1;
  var opacity1 = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    if (opacity <= 0) {
      if (scrollTop > distanceToTop2) {
        opacity1 = 1 - (scrollTop - distanceToTop2) / elementHeight2;
      }
    }
  }
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
  if (opacity1 >= 0) {
    element2.style.opacity = opacity1;
  }
}

window.addEventListener("scroll", fadeOnScroll)

