function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

function signupToggle() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var popup = document.querySelector('.signup-form');
    popup.classList.toggle('active');
}

function loginToggle() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var popup = document.querySelector('.login-form');
    popup.classList.toggle('active');
}