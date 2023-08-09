const images = document.querySelectorAll("#presentation_section .widget.Image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let isAutoSlideActive = true;
let autoSlideInterval;

images[currentIndex].style.opacity = 1;

function nextSlide() {
  if (!isAutoSlideActive) return;
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}

autoSlideInterval = setInterval(nextSlide, 3000);

function activateAutoSlide() {
  isAutoSlideActive = true;
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

prevBtn.addEventListener("click", () => {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].style.opacity = 1;
  activateAutoSlide();
});

nextBtn.addEventListener("click", () => {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
  activateAutoSlide();
});