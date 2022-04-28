
window.addEventListener('DOMContentLoaded', function () {

	// Slider 

	const slides = document.querySelectorAll('.slider__slide'), // каждая карточка слайдера (3шт)
		prev = document.querySelector('.slider__prev'), // стрелка лево
		next = document.querySelector('.slider__next'), // стрелка право

		// сложный слайдер
		slidesWrapper = document.querySelector('.slider__wrapper'), // обертка слайдера
		slidesField = document.querySelector('.slider__inner'), // 2ая доп обертка которая преобразует карточки слайдера вертикальн в горизонтальные 

		width = window.getComputedStyle(slidesWrapper).width; //  ширина 1 ой обертки слайдера взятый из виндовс объект .offer__slider-wrapper


	let slideIndex = 1; // переменная указывающая на текущий первый слайд
	let offset = 0; // отступ для трансформа

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width;
	});

	next.addEventListener('click', () => {
		if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

	});

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	});
});