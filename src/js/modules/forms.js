import checkNumInputs from "./checkNumInputs";

// передаем глобальный обьект state
const forms = (state) => {
	//получаем все формы на странице
	const form = document.querySelectorAll('form');
	//получаем все инпуты на странице
	const inputs = document.querySelectorAll('input');


	//включаем тут валидацию инпутов номера телефона
	checkNumInputs('input[name="user_phone"]');
	
	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	//создаем функцию отправки данных, т.к ответ с сервера придет не сразу, 
	// создаем  асинхронный запрос

	//при старте отправки данных начинаем выводить сообщение со статусом
	// затем, ждем ответ от сервера, пока выполнится промис "fetch"
	// а потом этот промис записываем в RES, который стоит перед "await"
	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		 
		let res = await fetch(url, {
			method: "POST",
			body: data 
		});
		return await res.text(); 
	};

	const clearIntputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();
		 //по нажатии кнопки отправки формы добавляем в форму блок с классом"status"
		 //в ней будет выводиться сообщение со статусом
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			// помещаем блок в конец формы
			item.appendChild(statusMessage);
		 
		 //собираем все данные которые есть в форме
		 //помещаем в конструктор форму с этими данными	

		 //после того как сформеровались все данные, проверяем, та ли это форма, которая собирает все данные характеристик окон, 
		 // если да - формируем этот обьект данных, вмете с номером телефона и именем 
			const formData = new FormData(item); 
			if (item.getAttribute('data-calc') === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}
			
		 //постим дату на сервер, ставим статус сообщения в окно, в зависимости от исхода, и чистим окна после 	
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
					clearIntputs();
					setTimeout(() => {
						statusMessage.remove();

					}, 5000);
				});
		});
	});
};

export default forms;

