// laptop testimonial slider script
function currentDiv(j) {
    showDivsLaptop(slideIndexLaptop = j);
}
function showDivsLaptop(j) {
    var i;
    var laptopItems = document.getElementsByClassName("hp-slider-item-laptop");
    var dots = document.getElementsByClassName("thumbnail-img");

    if (j > laptopItems.length) {slideIndexLaptop = 1}
    if (j < 1) {slideIndexLaptop = laptopItems.length}

    for (i = 0; i < laptopItems.length; i++) {
        laptopItems[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }

    laptopItems[slideIndexLaptop-1].style.display = "flex";
    dots[slideIndexLaptop-1].className += " w3-opacity-off";
}        

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
    }
    x[slideIndex-1].style.display = "block";  
}

// keyboard accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        plusDivs(-1); // previous slide
    } else if (event.key === 'ArrowRight') {
        plusDivs(1); // next slide
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        showDivsLaptop(slideIndexLaptop - 1); // previous slide
    } else if (event.key === 'ArrowRight') {
        showDivsLaptop(slideIndexLaptop + 1); // next slide
    }
});