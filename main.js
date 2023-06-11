'use strict'

const prevButton = document.querySelector('[data-btn="prevBtn"]');
const nextButton = document.querySelector('[data-btn="nextBtn"]');
const sliderBack = document.querySelector(".photo-slider__back");

let slideIndex = 0;

showSlide(slideIndex);

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	const slides = document.querySelectorAll(".photo-slider__container img");
	const counterElem = document.querySelector('.photo-slider__counter')

	const slidersNumber = slides.length;

	if (n >= slides.length) {
		slideIndex = 0;
	} else if (n < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.style.display = "none";
	});


	counterElem.textContent = `${slideIndex + 1} of ${slidersNumber}`;
	let sourceLink = slides[slideIndex].src;
	sliderBack.style.backgroundImage = `url(${sourceLink})`;
	slides[slideIndex].style.display = "block";
}


