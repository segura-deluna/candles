$(document).ready(function () {
	"use strict";

	// Modal header ==========

	var popupsToggle = document.querySelectorAll('.open-popup');

	var popupClose = document.querySelectorAll('.close');


	popupsToggle.forEach(function (item) {
		item.addEventListener('click', function () {
			var popupName = item.getAttribute('data-popup');
			document.getElementById(popupName).style.display = 'block';
		})
	})

	popupClose.forEach(function (item) {
		item.addEventListener('click', function () {
			var popup = item.closest('.modal');
			popup.style.display = 'none';
		})
	})

	window.onclick = function (e) {
		if (e.target.classList.contains('modal')) {
			e.target.style.display = 'none';
		}
	}



	// Slider ===========

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="product-slider__prev product-slider__arrows" ><img src="./img/back.svg" alt=""></img></div>',
		nextArrow: '<div class="product-slider__next product-slider__arrows" ><img src="./img/next.svg" alt=""></img></div>',
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true
	});
});