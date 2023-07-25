// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
setTimeout(openModal, 10000)
modal.onclick = (event) => {
    event.stopPropagation()
    event.target === modal && closeModal()
}

const scrollModal = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal(1)
        window.removeEventListener('scroll', scrollModal);
    }
}

window.addEventListener('scroll', scrollModal);

//removeEventListener-делать с этим методом дз