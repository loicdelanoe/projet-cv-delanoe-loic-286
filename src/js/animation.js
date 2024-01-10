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