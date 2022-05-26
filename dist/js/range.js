
window.addEventListener('DOMContentLoaded', function () {

	// range

	let range = function () {
		const rangeInput = document.querySelectorAll(".range-input input"),
			priceInput = document.querySelectorAll(".price-input input"),
			advance = document.querySelector(".slider-price .advance");

		let priceGap = 10;

		priceInput.forEach(input => {
			input.addEventListener("input", e => {
				let minVal = parseInt(priceInput[0].value),
					maxVal = parseInt(priceInput[1].value);
				if ((maxVal - minVal >= priceGap) && maxVal <= 1000) {
					if (e.target.className === "input-min") {
						rangeInput[0].value = minVal;
						advance.style.left = (minVal / rangeInput[0].max) * 100 + "%";
					} else {
						rangeInput[1].value = maxVal;
						advance.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
					}
				}
			});
		});


		rangeInput.forEach(input => {
			input.addEventListener("input", e => {
				let minVal = parseInt(rangeInput[0].value),
					maxVal = parseInt(rangeInput[1].value);
				if (maxVal - minVal < priceGap) {
					if (e.target.className === "range-min") {
						rangeInput[0].value = maxVal - priceGap;
					} else {
						rangeInput[1].value = minVal + priceGap;
					}
				} else {
					priceInput[0].value = minVal;
					priceInput[1].value = maxVal;
					advance.style.left = (minVal / rangeInput[0].max) * 100 + "%";
					advance.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
				}
			});
		});
	}
	range();

});

