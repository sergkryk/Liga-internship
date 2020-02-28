'use strict';
var callRequestButton = document.querySelector('.site-header__button');
var callRequestModal = document.querySelector('.call-request');
var callRequestCloseBtn = callRequestModal.querySelector('.call-request__close-btn');

var closeModal = function () {
  callRequestModal.classList.add('call-request--hidden');
};

var onEscPressRemove = function (evt) {
  if (evt.keyCode === 27) {
    closeModal();
    removeListeners();
  }
};

var onClickRemove = function (evt) {
  if (evt.target === callRequestCloseBtn || evt.target === callRequestModal) {
    closeModal();
    removeListeners();
  }
};

var addListeners = function () {
  document.addEventListener('keypress', onEscPressRemove);
  document.addEventListener('click', onClickRemove);
};


var removeListeners = function () {
  document.removeEventListener('keypress', onEscPressRemove);
  document.removeEventListener('click', onClickRemove);
};

callRequestButton.addEventListener('click', function () {
  callRequestModal.classList.remove('call-request--hidden');
  addListeners();
});
