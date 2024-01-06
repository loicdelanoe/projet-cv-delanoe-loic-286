const burgerMenu = {
    mainNavElement: document.getElementById('mainNav'),
    burgerButton: document.getElementById('burgerButton'),
    closeBurger: document.getElementById('closeBurger'),
    navTitle: document.querySelector('.main-nav h2'),
    init() {
        this.closeBurgerButton = document.getElementById('closeBurger');
        this.burgerButton.classList.remove('hidden');
        this.closeBurger.classList.remove('hidden');
        this.addEventListeners();
    },
    addEventListeners() {
        this.burgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('opened');
        });

        this.closeBurgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('opened');
        });
    }
};
burgerMenu.init();

console.log(burgerMenu.burgerButton)