// scroll to top bottom js

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.topto');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

function aboutto() {
    window.scrollTo({
        top: 50000,
        behavior: "smooth",
    })
}
// ---------------------------