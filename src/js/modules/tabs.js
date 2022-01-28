const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    //header = обьединяет все табы
    const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

    // i = 0 значит, какой элемент в карусели будет показываться по умолчанию
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    //навешиваем обработчкик событий на область со всеми табами
    header.addEventListener('click', (e) => {
        //ниже - скрипт берет место, куда кликнул пользователь
        const target = e.target;

        //это условие проверяет, является ли то место, куда кликнул пользователь
        // определенным табом с классом .class, где мы с помощью регулярки удаляем точку 
        if (target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {

            //перебираем табы, куда мы кликнули, и запоминаем индекс,
            tab.forEach((item, i) => {
                //если мы при переборе встретили таб, 
                // на который кликнули - меняем его стили
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
export default tabs;