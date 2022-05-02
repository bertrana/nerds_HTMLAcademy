function openModal() {
  modal.classList.remove('visually-hidden');
}

function closeModal() {
  modal.classList.add('visually-hidden');
}

const modal = document.querySelector('.modal');
const openButton = document.querySelector('.modal-button');
const closeButton = modal.querySelector('.modal-close');

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);