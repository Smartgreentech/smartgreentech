let currentSlide = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// สไลด์อัตโนมัติทุก ๆ 3 วินาที
setInterval(showSlide, 3000);
