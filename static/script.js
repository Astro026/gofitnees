let currentIndex = 0;
let autoSlideInterval;

// Mostra o slide atual
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    currentIndex = index;
}

// Vai para o slide anterior
function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

// Vai para o próximo slide
function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

// Inicia a rotação automática dos slides
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Troca a cada 3 segundos
}

// Pausa a rotação automática dos slides
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startAutoSlide();

    // Para a rotação automática quando o usuário interagir
    const controls = document.querySelectorAll('.carousel-control');
    controls.forEach(control => {
        control.addEventListener('mouseenter', stopAutoSlide);
        control.addEventListener('mouseleave', startAutoSlide);
    });
});


