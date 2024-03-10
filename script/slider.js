document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Функція, яка приховує всі слайди
  function hideSlides() {
      slides.forEach(function (slide) {
          slide.classList.remove('active');
      });
  }

  // Показати перший слайд при завантаженні сторінки
  slides[currentSlide].classList.add('active');

  // Обробник кліку на кнопку "наступний"
  nextButton.addEventListener('click', function () {
      hideSlides();
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  });

  // Обробник кліку на кнопку "попередній"
  prevButton.addEventListener('click', function () {
      hideSlides();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
  });
});