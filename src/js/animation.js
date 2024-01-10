const observers = {
    showUpElements: document.querySelectorAll('[data-animation="showUp"]'),
    scaleUpElements: document.querySelectorAll('[data-animation="scaleUp"]'),
    init() {
        this.showUpElements.forEach((showUpElement) => {
            showUpElement.classList.add('no-opacity');
        });
        this.scaleUpElements.forEach((scaleUpElement) => {
            scaleUpElement.classList.add('no-opacity');
        });
        this.showUpObserver = new IntersectionObserver(this.showUpAnimation);
        this.scaleUpObserver = new IntersectionObserver(this.scaleUpAnimation);
        this.observeAction();
    },
    showUpAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showUp');
                entry.target.classList.remove('no-opacity');
            }
        });
    },
    scaleUpAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scaleUp');
                entry.target.classList.remove('no-opacity');
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