document.addEventListener('DOMContentLoaded', function () {
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const burgerButton = document.querySelector('.but-burger');
  const closeButton = document.querySelector('.close-mobile-overlay');

  function closeOverlayOnOutsideClick(event) {
    if (event.target === mobileOverlay) {
      closeOverlay();
      mobileOverlay.removeEventListener('click', closeOverlayOnOutsideClick);
    }
  }
  // Функція для відкриття оверлею
  function openOverlay(event) {
    mobileOverlay.classList.add('is-open-mob');
    mobileOverlay.addEventListener('click', closeOverlayOnOutsideClick);
  }

  // Функція для закриття оверлею
  function closeOverlay(event) {
    mobileOverlay.classList.remove('is-open-mob');
  }

  // Обробник для натискання на кнопку "бургер"
  burgerButton.addEventListener('click', openOverlay);

  // Обробник для натискання на кнопку "закрити"
  closeButton.addEventListener('click', closeOverlay);
});
