var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-acc");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      updateTabIndex(panel, true);
    } else {
      panel.style.maxHeight = "fit-content";
      updateTabIndex(panel, false);
    }
  });
}

function updateTabIndex(panel, shouldDisable) {
  var phoneBtns = panel.querySelectorAll('.ci-chair-phone');
  var emailBtns = panel.querySelectorAll('.ci-chair-email');
  var fullBioBtns = panel.querySelectorAll('.ci-chair-full');

  var tabIndexValue = shouldDisable ? '-1' : '0';

  phoneBtns.forEach(btn => btn.setAttribute('tabindex', tabIndexValue));
  emailBtns.forEach(btn => btn.setAttribute('tabindex', tabIndexValue));
  fullBioBtns.forEach(btn => btn.setAttribute('tabindex', tabIndexValue));
}
