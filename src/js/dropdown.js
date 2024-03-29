import { settings } from './settings';

export const dropdownButton = {
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
                const id = e.currentTarget.dataset.id;
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
