function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("ci-audience-description-tablet");
  var dots = document.getElementsByClassName("ci-audience-name-tablet");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("white-bg", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " white-bg";
}

var dots = document.getElementsByClassName("ci-audience-name-tablet");

for (let i = 0; i < dots.length; i++) {
  dots[i].setAttribute("tabindex", "0"); // make dots focusable

  dots[i].addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      currentDiv(i + 1); // move to the corresponding slide
    }
  });
}
