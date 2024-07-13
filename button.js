document.addEventListener('DOMContentLoaded', function () {
  const backdrop = document.querySelector('.backdrop');
  const orderButton = document.querySelector('.main-wr-element-a-button');
  const closeButton = document.querySelector('.button-modal-window');

  // Функція для відкриття бекдропа
  function openBackdrop() {
    backdrop.classList.add('is-open');
  }

  // Функція для закриття бекдропа
  function closeBackdrop() {
    backdrop.classList.remove('is-open');
  }

  // Додаємо обробники подій
  orderButton.addEventListener('click', openBackdrop);
  closeButton.addEventListener('click', closeBackdrop);
});
