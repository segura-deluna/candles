$(document).ready(function () {
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