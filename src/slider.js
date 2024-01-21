export function startSlider() {

const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('img'));

const dotNav = document.querySelector('.slyder-dots');
const dotNavItem = Array.from(dotNav.querySelectorAll('.dot'));

const slideCount = slides.length;
let slideIndex = 0;

dotNavItem.forEach((navItem, navIndex) => {
    navItem.addEventListener('click', function() {
        slideIndex = navIndex;
        navItemClick(slideIndex);
    });

})

function navItemClick (){
    updateSlider();
    updateDotNav();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    updateDotNav();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    updateDotNav();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
}

function updateDotNav() {
    dotNavItem.forEach((item, index) => {
        if (index === slideIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }); 
}
updateSlider();
updateDotNav();

setInterval(function() {
    showNextSlide();
}, 5000);
}