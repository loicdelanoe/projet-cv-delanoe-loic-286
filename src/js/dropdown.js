const dropdownButton = {
    dropdownElements: document.querySelectorAll('.dropdown-btn'),
    init() {
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
            subListWrapper.classList.toggle('js-expand');
        } else {
            subListWrapper.classList.remove('js-expand');
        }
    });
}
};

dropdownButton.init();


