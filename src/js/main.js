import "./slider"; 
import tabs from './modules/tabs';
import modals from './modules/modals';
import timer from './modules/timer';
import changeModalState from "./modules/changeModalState";
import forms from './modules/forms';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	//обьект ModalState является состоянием нашего модального окна, где пользвоатель постоянно что-то выбирает, 
	//это окно постоянно модифицируется
	let modalState = {};


	// сюда передаем ссылку на обьект ModalState, что значит, что мы сможем модифицировать его 
	changeModalState(modalState);
    
	modals();
	tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block'); 
	timer('.timer1','2022-02-19');

	//отправляет форму на сервер
	forms (modalState);
	images();



});

console.log (" Hello");

