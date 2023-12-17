const burgerMenu = {
    mainNavElement: document.getElementById('mainNav'),
    burgerButton: document.getElementById('burgerButton'),
    nativeCssBurgerButton: document.querySelector('input[type="checkbox"]'),
    navTitle: document.querySelector('.main-nav h2'),
    init() {
        this.generateCloseButton();
        this.closeBurgerButton = document.getElementById('closeBurger');
        this.nativeCssBurgerButton.classList.add('hidden');
        this.burgerButton.classList.remove('hidden');
        this.addEventListeners();
    },
    addEventListeners() {
        this.burgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('close');
        });

        this.closeBurgerButton.addEventListener('click', () => {
            this.mainNavElement.classList.toggle('close');
        });
    },
    generateCloseButton() {
        this.navTitle.insertAdjacentHTML('afterend', `<button id="closeBurger" class="close-burger-button">Close burger</button>`);
    },
};

burgerMenu.init();
