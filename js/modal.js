function openModal() {
  modal.classList.remove('visually-hidden');
}

function closeModal() {
  modal.classList.add('visually-hidden');
}

let modal = document.querySelector('.modal');
let openButton = document.querySelector('.modal-button');
let closeButton = modal.querySelector('.modal-close');

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);