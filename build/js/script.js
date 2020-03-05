'use strict';
var siteBody = document.querySelector('body');
var callRequestButton = document.querySelector('.site-header__button');
var popup = document.querySelector('.call-request');
var popupCloseBtn = popup.querySelector('.call-request__close-btn');
var form = popup.querySelector('.call-request__form');
var formFeedback = document.querySelector('.feedback__form');
var login = popup.querySelector('[name=user-name]');
var phone = popup.querySelector('[name=user-phone]');
var question = popup.querySelector('[name=user-question]');
var loginStorage = localStorage.getItem('login');
var phoneStorage = localStorage.getItem('phone');


var footerForm = document.querySelector('.feedback__form');
var footerPhone = footerForm.querySelector('[name=footer-phone]');

var closeModal = function () {
  popup.classList.add('call-request--hidden');
  siteBody.classList.remove('blocked-scrolling');
};

var onEscPressRemove = function (evt) {
  if (evt.keyCode === 27) {
    closeModal();
    removeListeners();
  }
};

var onClickRemove = function (evt) {
  if (evt.target === popupCloseBtn || evt.target === popup) {
    closeModal();
    removeListeners();
  }
};

var addListeners = function () {
  document.addEventListener('keydown', onEscPressRemove);
  document.addEventListener('click', onClickRemove);
};


var removeListeners = function () {
  document.removeEventListener('keypress', onEscPressRemove);
  document.removeEventListener('click', onClickRemove);
};

callRequestButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('call-request--hidden');
  siteBody.classList.add('blocked-scrolling');
  login.focus();

  if (loginStorage) {
    login.value = loginStorage;
    phone.focus();
  }

  if (phoneStorage) {
    phone.value = phoneStorage;
    question.focus();
  }
  addListeners();
});

form.addEventListener('submit', function () {
  localStorage.setItem('login', login.value);
  localStorage.setItem('phone', phone.value);
});

formFeedback.addEventListener('submit', function () {
  localStorage.setItem('login', login.value);
  localStorage.setItem('phone', phone.value);
});


phone.addEventListener('focus', function () {
  var oldValue = phone.value;
  if (!oldValue) {
    var countryCode = '7';
    phone.value = countryCode;
  }
});

footerPhone.addEventListener('focus', function () {
  var oldValue = footerPhone.value;
  if (!oldValue) {
    var countryCode = '7';
    footerPhone.value = countryCode;
  }
});

var im = new window.Inputmask('+9 (999) 999-99-99');
im.mask(document.querySelector('[name=user-phone]'));
im.mask(document.querySelector('[name=footer-phone]'));
