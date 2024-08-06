// laptop testimonial slider script
function currentDiv(j) {
    showDivsLaptop(slideIndexLaptop = j);
}

var thumbnail1 = document.getElementById("thumbnail-1");
var thumbnail2 = document.getElementById("thumbnail-2");
var thumbnail3 = document.getElementById("thumbnail-3");



thumbnail1.style.display = "none";

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

        if (slideIndexLaptop == 1) { 
            thumbnail1.style.display = "none";
            thumbnail2.style.display = "block";
            thumbnail3.style.display = "block";
        }

        if (slideIndexLaptop == 2) { 
            thumbnail2.style.display = "none";
            thumbnail3.style.display = "block";
            thumbnail1.style.display = "block";
        }

        if (slideIndexLaptop == 3) { 
            thumbnail3.style.display = "none";
            thumbnail1.style.display = "block";
            thumbnail2.style.display = "block";
        }
    }

    laptopItems[slideIndexLaptop-1].style.display = "flex";
    dots[slideIndexLaptop-1].className += " w3-opacity-off";
}        

thumbnail1.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        currentDiv(1);
    }
});

thumbnail2.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        currentDiv(2);
    }
});

thumbnail3.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        currentDiv(3);
    }
});