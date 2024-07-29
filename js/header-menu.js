document.querySelector('.header-hamburger-menu').addEventListener('click', function() {
    document.querySelector('.header-menus').classList.add('active');
});

document.querySelector('.header-hamburger-menu-close').addEventListener('click', function() {
    document.querySelector('.header-menus').classList.remove('active');
});

document.querySelector('.header-hamburger-menu').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.header-menus').classList.add('active');
    }
});

document.querySelector('.header-hamburger-menu-close').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.header-menus').classList.remove('active');
    }
});