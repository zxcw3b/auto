


const ratings = document.querySelectorAll ('.rating');
if (ratings.length>0) {
	initRatings();
}
//Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	//Бегаем по всем рейтингам по стр.
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}
	//Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();
//Возможность указывать оценку
		if (rating.classList.contains('rating-set')) {
			setRating(rating);
		}
	}
//Инициализируем переменные
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
//Изменяем ширину активных звёзд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
//Возможность указывать оценку
	function setRating(rating) {
		//Задаём переменную в которой выбираем все элементы с опр. классом
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			//Задаём событие с наводом мыши
			ratingItem.addEventListener("mouseenter", function (e) {
				//Обновление переменных
				initRatingVars(rating);
				//Обновление активных звёзд
				setRatingActiveWidth(ratingItem.value);
			});
			//Задаём событие когда мышь будем убрана
			ratingItem.addEventListener("mouseleave", function (e) {
				//Обновление активных звёзд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				//Обновление активных звёзд (для функционирования на сенсорах, т.к. не мб событие при наведении)
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					//Отправить на сервер AJAX (если указан некий атрибут data, то пересчитывает)
					setRatingValue(ratingItem.value, rating);
				} else {
					//Отобразить указанную оценку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	}
