const closeButton = document.querySelector('.button-modal-window');

function closeOverlayOnOutsideClick(event) {
  if (event.target === backdrop) {
    backdrop.removeEventListener('click', closeOverlayOnOutsideClick);
    closeBackdrop();
  }
}

// Функція для відкриття бекдропа
function openBackdrop() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.add('is-open');
  backdrop.addEventListener('click', closeOverlayOnOutsideClick);
}

// Функція для закриття  бекдропа
function closeBackdrop() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-open');
}

// Додаємо обробники подій
orderButton.addEventListener('click', openBackdrop);
closeButton.addEventListener('click', closeBackdrop);
