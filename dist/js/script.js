
window.addEventListener('DOMContentLoaded', function () {

	// Slider 

	try {
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
		});

		// select

		let select = function () {
			let selectHeader = document.querySelector('.select__header'),
				selectItem = document.querySelectorAll('.select__item');

			selectHeader.addEventListener('click', selectToggle);

			selectItem.forEach(item => {
				item.addEventListener('click', selectChoose);
			});

			function selectToggle() {
				this.parentElement.classList.toggle('select__active');
			}

			function selectChoose(e) {
				let target = e.target;
				let text = this.innerText,
					currentText = this.closest('.select').querySelector('.select__current');
				// создание блока
				let newSqr = document.createElement('div');


				// выбор элемента
				currentText.innerText = text;

				// класс квадрата
				let elem = target.firstElementChild;
				newSqr.classList.add(elem.classList[0])

				currentText.prepend(newSqr);
				// закрытие option
				select = this.closest('.select');
				select.classList.remove('select__active');

			}
		}
		select();


	} catch (error) {

	}

});

