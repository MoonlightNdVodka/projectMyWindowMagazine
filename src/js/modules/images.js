const images = () => {
    const imgPopup = document.createElement('div'),

    //получаем картинки на рабочей странице мелкого формата
          workSection = document.querySelector('.works'),
          //получаем исходники - большие картинки
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    //добавим класс "попап" в блок imgPopup к классу .works

    // добавляем это окно в верстку, ибо до этого оно существует только внутри джаваскрипта
    workSection.appendChild(imgPopup);


    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    //помещаем изображение, которое только что создали
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';

        }
    });
};

export default images;