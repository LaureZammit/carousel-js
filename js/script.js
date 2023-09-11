// Select slides

let slides = document.querySelectorAll(".item__image");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let currentSlide = 0;

// Select next slide button
const nextSlide = document.querySelector(".btn-next");

// Add event listener and next slide function
nextSlide.addEventListener("click", () => {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    updateCarousel();
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", () => {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    updateCarousel();
});

// Sélectionnez la div des points de contrôle
const carouselDots = document.querySelector(".carousel-dots");

// Créez un tableau de points de contrôle en fonction du nombre de diapositives
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        // Lorsqu'un point est cliqué, passez à la diapositive correspondante
        curSlide = index;
        updateCarousel();
    });
    carouselDots.appendChild(dot);
});

// Fonction pour mettre à jour le carrousel en fonction de la diapositive actuelle
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });

    // Mettez à jour la classe "active" du point de contrôle actif
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === curSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Appelez la fonction updateCarousel pour afficher la première diapositive comme active
updateCarousel();