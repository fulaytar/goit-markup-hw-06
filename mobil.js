document.addEventListener('DOMContentLoaded', function () {
    var mobileOverlay = document.querySelector('.mobile-overlay');
    var burgerButton = document.querySelector('.but-burger');
    var closeButton = document.querySelector('.close-mobile-overlay');

    // Функція для відкриття оверлею
    function openOverlay() {
        mobileOverlay.classList.add('is-open-mob');
    }

    // Функція для закриття оверлею
    function closeOverlay() {
        mobileOverlay.classList.remove('is-open-mob');
    }

    // Обробник для натискання на кнопку "бургер"
    burgerButton.addEventListener('click', openOverlay);

    // Обробник для натискання на кнопку "закрити"
    closeButton.addEventListener('click', closeOverlay);
});