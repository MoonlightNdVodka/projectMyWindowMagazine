import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {


    //получаем все те 5 типов данных, с которых мы получим данные со страницы
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');  
    

    //делаем валидацию данных со страницы, где необходим порядковый номер      
    checkNumInputs('#width');
    checkNumInputs('#height');


    //создаем функцию, которая на определенный элемент вешает опред. обработчик событий, 
    // и записывает их в определенное свойство в наш глобальный обьект State 
    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {

                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        }   else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    //привязываем определенные элементы к определенным событиям
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'heigth');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};
export default changeModalState;