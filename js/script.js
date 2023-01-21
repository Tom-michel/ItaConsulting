// ===================== HOME PAGE (ihdex) ======================

// change position of navbar when scrolling

var divNav = document.getElementById("div-nav");

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        divNav.classList.add("scroll");
    } else {
        divNav.classList.remove("scroll");
    }
});

// NAVBAR OVER INDICATOR

var marker = document.querySelector('#marker')
var items = document.querySelectorAll('#div-nav nav .nav-item');
var itemLinks = document.querySelectorAll('#div-nav nav .nav-item .nav-link');

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
const removeActiveClass = () => {
    items.forEach(link => {
        link.querySelector(".nav-link").classList.remove("active");
    });
}
items.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
        removeActiveClass();
        link.querySelector(".nav-link").classList.add("active");
    });
    // link.onmouseover = function(e) {
    //     indicator(e.target);
    // };
});
