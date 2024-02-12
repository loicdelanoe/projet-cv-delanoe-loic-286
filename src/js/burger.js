import { settings } from './settings';

export const burgerMenu = {
    mainNavElement: document.getElementById(settings.mainNavId),
    burgerButton: document.getElementById(settings.burgerButtonId),
    closeBurger: document.getElementById(settings.closeBurgerId),
    navTitle: document.querySelector(settings.navTitleSelector),
    init() {
        this.mainNavElement.classList.remove(settings.noJsNavClass);
        this.burgerButton.classList.remove(settings.hiddenClass);
        this.closeBurger.classList.remove(settings.hiddenClass);
        this.mainNavElement.classList.remove(settings.openedClass);
        this.addEventListeners();
    },
    addEventListeners() {
        this.burgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle(settings.openedClass);
        });

        this.closeBurger.addEventListener('click', () => {
            this.mainNavElement.classList.toggle(settings.openedClass);
        });
    }
};
