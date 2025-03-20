let currentSlide = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;

    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

setInterval(showSlide, 4000); // สไลด์จะเปลี่ยนทุก ๆ 4 วินาที
