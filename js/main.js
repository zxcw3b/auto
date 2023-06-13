
$(function () {

// ----- MIXER ------//

	var mixer = mixitup('.blog__post-list');
	$('.blog__categories-btn').on('click', function () {
		$('.blog__categories-btn').removeClass('blog__categories-btn--active')
		$(this).addClass('blog__categories-btn--active')
	})

// ----- SLIDER ------//

	$('.feedback__slider').slick({
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		appendDots: $('.feedback__dots'),
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	})
	$('.feedback__arrows-prev').on('click', function (e) {
		e.preventDefault()
		$('.feedback__slider').slick('slickPrev')
	})
	$('.feedback__arrows-next').on('click', function (e) {
		e.preventDefault()
		$('.feedback__slider').slick('slickNext')
	})

	// ----- ACCORDEON DEFAULT ------//

	$('.acc__link').on('click', function(e) {
		e.preventDefault()
	$(this).toggleClass('acc__link--active')
	$(this).children('.acc__item-text').slideToggle()
	})

	// ----- ACCORDEON W/ AUTOCLOSING ------//

// 	$('.acc__link').on('click', function(e){
// 		e.preventDefault()
// 		if ($(this).hasClass('acc__link--active')) {
// 				$(this).removeClass('acc__link--active')
// 				$(this).children('.acc__item-text').slideUp()
// 				stopImmediatePropagation()
// 		}
// 		$('.acc__link').removeClass('acc__link--active')
// 		$('.acc__item-text').slideUp()
// 		$(this).toggleClass('acc__link--active')
// 		$(this).children('.acc__item-text').slideDown()
// })
	$(".header__nav a, .header__body-btn, .content__body-btn, .footer__logo-link, .footer__nav-list a, #body").on("click", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault()
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь+ к топу можно добавить в пикселях насколько можно перемещать от блока вверх со знаком "-" или вниз
				top = $(id).offset().top
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500)
	});

})
