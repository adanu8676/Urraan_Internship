const leftArrows = document.querySelectorAll('.left');
const rightArrows = document.querySelectorAll('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const buttons = document.querySelectorAll('.button');

let slideNumber = 0;

rightArrows.forEach(rightArrow => {
    rightArrow.addEventListener('click', () => {
        if (slideNumber < images.length - 1) {
            slideNumber++;
        } else {
            slideNumber = 0;
        }
        updateSlider();
    });
});

leftArrows.forEach(leftArrow => {
    leftArrow.addEventListener('click', () => {
        if (slideNumber > 0) {
            slideNumber--;
        } else {
            slideNumber = images.length - 1;
        }
        updateSlider();
    });
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slideNumber = index;
        updateSlider();
    });
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    buttons.forEach((button, index) => {
        button.style.backgroundColor = index === slideNumber ? 'white' : 'transparent';
    });
}
