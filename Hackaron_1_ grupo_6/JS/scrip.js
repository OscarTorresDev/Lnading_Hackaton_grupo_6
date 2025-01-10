
// Variables para el control del carrusel
let index = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

// Función para mover el carrusel
function moveSlide(step) {
    index += step;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    // Mover la imagen con el transform
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${index * slideWidth}px)`;
}

// Opcional: Para que el carrusel avance automáticamente
setInterval(() => {
    moveSlide(1);
}, 5000);  // Cambia la imagen cada 5 segundos
