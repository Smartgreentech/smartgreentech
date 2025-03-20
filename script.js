/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #F2FFF5;
    color: #333;
}

/* Navbar */
.navbar {
    background: #007A33;
    padding: 15px;
    text-align: center;
}

.navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

.navbar li {
    margin: 0 15px;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Sections */
section {
    padding: 50px 20px;
    max-width: 800px;
    margin: auto;
}

h2 {
    color: #007A33;
}
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
