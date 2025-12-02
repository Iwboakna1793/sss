/*
 * script.js
 * Kimlong Store Global JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // --- Image Slider Logic (for index.html) ---
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            const offset = -currentSlide * (100 / totalSlides);
            sliderTrack.style.transform = `translateX(${offset}%)`;
        }

        document.querySelector('.slider-button.next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });

        document.querySelector('.slider-button.prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        // Optional: Auto-slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    }

    // --- Add any future global JS functions here (e.g., form validation) ---

});