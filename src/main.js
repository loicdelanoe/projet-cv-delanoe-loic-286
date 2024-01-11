const settings = {
    showUpClass: 'showUp',
    scaleUpClass: 'scaleUp',
    NoOpacityClass: 'no-opacity',
    expandClass: 'expand-dropdown',
    openedClass: 'opened',
    hiddenClass: 'hidden',
    noJsNavClass: 'no-js-nav',
    closeBurgerId: 'closeBurger',
    burgerButtonId: 'burgerButton',
    mainNavId: 'mainNav',
    navTitleSelector: '.main-nav h2',
};
const burgerMenu = {
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
const dropdownButton = {
    dropdownElements: document.querySelectorAll('.dropdown-btn'),
    subListWrapperElements: document.querySelectorAll('.sub-list-wrapper'),
    init() {
        this.subListWrapperElements.forEach((subListWrapper) => {
            subListWrapper.classList.remove(settings.expandClass);
        });
        this.addEventListeners();
    },
    addEventListeners() {
        this.dropdownElements.forEach((dropdownButton) => {
            dropdownButton.addEventListener('click', (e) => {
                const id  = e.currentTarget.dataset.id;
                this.toggleDropdown(id);
            });
        });
    },
    toggleDropdown(id) {
        this.dropdownElements.forEach((dropdownButton) => {
            const subListWrapper = document.getElementById(dropdownButton.dataset.id);
            if (dropdownButton.dataset.id === id) {
                subListWrapper.classList.toggle(settings.expandClass);
            } else {
                subListWrapper.classList.remove(settings.expandClass);
            }
        });
    }
};
const observers = {
    showUpElements: document.querySelectorAll(`[data-animation="${settings.showUpClass}"]`),
    scaleUpElements: document.querySelectorAll(`[data-animation="${settings.scaleUpClass}"]`),
    init() {
        this.showUpElements.forEach((showUpElement) => {
            showUpElement.classList.add(settings.NoOpacityClass);
        });
        this.scaleUpElements.forEach((scaleUpElement) => {
            scaleUpElement.classList.add(settings.NoOpacityClass);
        });
        this.showUpObserver = new IntersectionObserver(this.showUpAnimation);
        this.scaleUpObserver = new IntersectionObserver(this.scaleUpAnimation);
        this.observeAction();
    },
    showUpAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(settings.showUpClass);
                entry.target.classList.remove(settings.NoOpacityClass);
            }
        });
    },
    scaleUpAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(settings.scaleUpClass);
                entry.target.classList.remove(settings.NoOpacityClass);
            }
        });
    },
    observeAction() {
        this.showUpElements.forEach((element) => {
            this.showUpObserver.observe(element);
        });

        this.scaleUpElements.forEach((element) => {
            this.scaleUpObserver.observe(element);
        });
    },
};

observers.init();
dropdownButton.init();
burgerMenu.init();