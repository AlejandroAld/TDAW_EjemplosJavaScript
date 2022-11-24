class Modal {
    constructor(contenedor, photo_list) {
        this.contenedor = contenedor;
        this.contenedor.innerHTML = '';
        this.currentIndex = null;
        this.photo_list = photo_list;
        this.onModalClick = this.onModalClick.bind(this);
        this.contenedor.addEventListener('click', this.onModalClick)
    }
    hideModal() {
        document.body.classList.remove('no-scroll');
        this.contenedor.classList.add('hidden');
        this.contenedor.innerHTML = '';
    }
    onModalClick() {
        this.hideModal();
    }
}