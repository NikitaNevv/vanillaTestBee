'use strict'

const prevButton = document.querySelector('[data-btn="prevBtn"]');
const nextButton = document.querySelector('[data-btn="nextBtn"]');
const sliderBack = document.querySelector(".photo-slider__back");

const toSendBox = document.querySelector('[data-atr="toSend"]');
const isSentBox = document.querySelector('[data-atr="isSent"]');
const toSendBtn = document.querySelector('[data-btn="toSend"]');

const offerInput = document.querySelector('[data-input="offer"]')

const composeOfferSection = document.querySelector('[data-atr="composeOffer"]');
const offerIsSentSection = document.querySelector('[data-atr="offerSuccess"]');
const editOfferBtn = document.querySelector('[data-btn="editOffer"]');
const makeOfferBtn = document.querySelector('[data-btn="toSendOffer"]');

const toggleCheckbox = document.querySelector('.toggle-btn__inp');
const toggleElement = document.querySelector('.toggle-btn__movable-box');
const toggleBtn = document.querySelector('.toggle-btn');
const text1 = document.querySelector('.toggle-btn__text-1');
const textarea = document.querySelector('.user-offer__textarea');

const inputPriceBox = document.querySelector('[data-atr="inputBox"]');
const averageChance = document.querySelector('[data-chance="average"]');
const goodChance = document.querySelector('[data-chance="good"]');
const badChance = document.querySelector('[data-chance="bad"]');

let slideIndex = 0;

window.onload = function() {
	toggleCheckbox.checked = true;
	offerInput.placeholder = "0";
	offerInput.value = '';
	document.querySelector('.select-main__options').style.display = 'none';
	document.querySelector('.select-secondary__options').style.display = 'none';
	document.querySelector('.user-offer__textarea').value  = '';
};

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

offerInput.addEventListener("focus", function() {
	this.placeholder = "";
});

offerInput.addEventListener("blur", function() {
	this.placeholder = "0";
});

offerInput.addEventListener("input", function() {
	this.style.width = (this.value.length * 80) + "px";
});

document.querySelector(".select-main__selected").addEventListener("click", function() {

	let options = this.nextElementSibling;
	options.style.display = options.style.display === "none" ? "block" : "none";
});

let options = document.querySelectorAll(".select-main__option");

options.forEach(function(option) {
	option.addEventListener("click", function() {
		let selectedText = this.textContent;
		let selectedValue = this.textContent;

		document.querySelector(".select-main__selected").textContent = selectedText;
		document.querySelector(".select-main__selected").dataset.value = selectedValue;

		this.parentElement.style.display = "none";
	});
});

toggleBtn.addEventListener('click', function() {
	toggleElement.style.left = '49%';
	toggleBtn.classList.add('toggle-btn--selected');
	text1.style.color = '#111111';

	if(!toggleCheckbox.checked) {
		text1.style.fontWeight = '500';
	}

	if (toggleCheckbox.checked) {
		toggleElement.style.left = '1%';
		toggleBtn.classList.remove('toggle-btn--selected');
		text1.removeAttribute('style');
		text1.style.fontWeight = '600';
	}
});

textarea.addEventListener('input', function() {
	let text = textarea.value;

	if (text.length > 140) {
		textarea.value = text.slice(0, 140);
	}
});

document.querySelector(".select-secondary__selected").addEventListener("click", function() {
	let options = this.nextElementSibling;

	document.querySelector(".select-secondary__box").style.borderColor = '#cbd8f3'
	options.style.display = options.style.display === "none" ? "block" : "none";
});

let secondaryOptions = document.querySelectorAll(".select-secondary__option");

secondaryOptions.forEach(function(option) {
	option.addEventListener("click", function() {
		let selectedText = this.textContent;
		let selectedValue = this.textContent;

		document.querySelector(".select-secondary__selected").textContent = selectedText;
		document.querySelector(".select-secondary__selected").dataset.value = selectedValue;

		this.parentElement.style.display = "none";
		document.querySelector(".select-secondary__box").style.borderColor = ''
	});
});

toSendBtn.addEventListener('click', () => {
	toSendBox.style.display = 'none';
	isSentBox.style.display = 'flex';
})

makeOfferBtn.addEventListener('click', () => {
	composeOfferSection.style.display = 'none';
	offerIsSentSection.style.display = 'flex';
})

editOfferBtn.addEventListener('click', () => {
	composeOfferSection.style.display = 'flex';
	offerIsSentSection.style.display = 'none';
})

offerInput.addEventListener('input', (event) => {
	let value = parseInt(event.target.value);

	if (value < 300 && value) {
		badChance.style.display = 'flex';
		averageChance.style.display = 'none';
		goodChance.style.display = 'none';
		inputPriceBox.style.color = '#ff7437';
	}

	if (value < 800 && value && value >= 400) {
		badChance.style.display = 'none';
		averageChance.style.display = 'none';
		goodChance.style.display = 'flex';
		inputPriceBox.style.color = '#29f8ac';
	}

	if (value >= 800 && value) {
		badChance.style.display = 'none';
		averageChance.style.display = 'flex';
		goodChance.style.display = 'none';
		inputPriceBox.style.color = '#a7b1bf';
	}
})
