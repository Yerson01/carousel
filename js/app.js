const carouselContainer  = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
const size = carouselImages[0].clientWidth;
let counter = 1;

//indicador
carouselImages.forEach((image, index) => {
    let span;
    if (image.id !== 'firstClone' && image.id !== 'lastClone') {
        span = document.createElement('span');
        span.id = index;
        span.classList.add('img-indicator');
        carouselContainer.querySelector('.indicators').appendChild(span);
    }
});

document.addEventListener('DOMContentLoaded', indicator);


//events
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; 
    carouselSlide.style.transition = 'transform .4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    indicator();  
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform .4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    indicator();
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        indicator();  
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        indicator();  
    }
    
});


//onhover buttons
prevBtn.addEventListener('mouseover', () => {
    carouselContainer.classList.add('hover-shadow', 'linear-gradient-right');
});

prevBtn.addEventListener('mouseout', () => {
    carouselContainer.classList.remove('hover-shadow', 'linear-gradient-right');

});


nextBtn.addEventListener('mouseover', () => {
    carouselContainer.classList.add('hover-shadow', 'linear-gradient-left');
});

nextBtn.addEventListener('mouseout', () => {
    carouselContainer.classList.remove('hover-shadow', 'linear-gradient-left');

});

function indicator() {
    document.querySelectorAll(`.img-indicator`).forEach(span => {
        if (span.id == carouselImages[counter].id) {
           span.classList.add('active');
        } else {
            span.classList.remove('active');
        }   
    });
}


