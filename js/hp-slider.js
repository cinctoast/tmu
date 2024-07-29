// mobile testimonial slider script
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("hp-slider-item-mobile");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        console.log(x[i]);
    }
    x[slideIndex-1].style.display = "block";  
}

// laptop testimonial slider script
function currentDiv(j) {
    showDivs(slideIndexLaptop = j);
}

function showDivs(j) {
    var i;
    var x = document.getElementsByClassName("hp-slider-item-laptop");
    var dots = document.getElementsByClassName("thumbnail-img");

    if (j > x.length) {slideIndexLaptop = 1}
    if (j < 1) {slideIndexLaptop = x.length}
    if (!(j < 1) && !(j > x.length)) {slideIndexLaptop = 1}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }

    x[slideIndexLaptop-1].style.display = "flex";
    dots[slideIndexLaptop-1].className += " w3-opacity-off";
}