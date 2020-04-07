$(function() {
	$('.hamburger').click(function(event) {
		$(this).toggleClass('is-active');
		$('.menu__mobile').toggleClass('active');
		$('body').toggleClass('active');
	});

	$('.header__controls__desire').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.popup__desire').toggleClass('active');
	});

	$('.header__controls__comparison').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.popup__balans').toggleClass('active');
	});

	$('.header__controls__basket').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.popup__basket').toggleClass('active');
	});




	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
    var container = $(".popup__desire");
    if (container.has(e.target).length === 0){
        $('.popup__desire').removeClass('active');
        $('.header__controls__desire').removeClass('is-active');
    }
 	});

 	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
    var container = $(".popup__balans");
    if (container.has(e.target).length === 0){
        $('.popup__balans').removeClass('active');
        $('.header__controls__comparison').removeClass('is-active');
    }
 	});


	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
		e.preventDefault();
	  var container = $(".popup__basket");
	  if (container.has(e.target).length === 0){
	      $('.popup__basket').removeClass('active');
	      $('.header__controls__basket').removeClass('is-active');
	  }
	});

	$('.close-control-popup').click(function(e) {
		e.preventDefault();
		$('.popup__control').removeClass('active');
		$('.header__controls a').removeClass('is-active');
	});

	$('.main__slider__content').slick({
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="main__slider__prev main__slider__arrows"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button type="button" class="main__slider__next main__slider__arrows"><span class="icon-right-arrow"></span></button>',
		responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
  ]
	});

	$('.main__catalog__title').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.main__catalog__content').toggleClass('active');
	});

	$('.about__info__btn').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.about__info__subtitle').toggleClass('active');
	});

});
