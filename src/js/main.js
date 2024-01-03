const burgerMenu = {
    mainNavElement: document.getElementById('mainNav'),
    burgerButton: document.getElementById('burgerButton'),
    closeBurger: document.getElementById('closeBurger'),
    // nativeCssBurgerButton: document.querySelector('input[type="checkbox"]'),
    navTitle: document.querySelector('.main-nav h2'),
    init() {
        this.closeBurgerButton = document.getElementById('closeBurger');
        // this.nativeCssBurgerButton.classList.add('hidden');
        this.burgerButton.classList.remove('hidden');
        this.closeBurger.classList.remove('hidden');
        this.addEventListeners();
    },
    addEventListeners() {
        this.burgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('close');
        });

        this.closeBurgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('close');
        });
    }
};
burgerMenu.init();

console.log(burgerMenu.burgerButton)