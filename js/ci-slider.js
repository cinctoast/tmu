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
