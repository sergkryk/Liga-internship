'use strict';
var callRequestButton = document.querySelector('.site-header__button');
var popup = document.querySelector('.call-request');
var popupCloseBtn = popup.querySelector('.call-request__close-btn');
var form = popup.querySelector('.call-request__form');
var login = popup.querySelector('[name=user-name]');
var phone = popup.querySelector('[name=user-phone]');
var question = popup.querySelector('[name=user-question]');
var loginStorage = localStorage.getItem('login');
var phoneStorage = localStorage.getItem('phone');

var closeModal = function () {
  popup.classList.add('call-request--hidden');
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

phone.addEventListener('focus', function () {
  var oldValue = phone.value;
  if (!oldValue) {
    var countryCode = '+7 (';
    phone.value = countryCode;
  }
});

phone.addEventListener('input', function (e) {
  if (e.data) {
    var x = e.target.value.replace(/\D/g, '').match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    var countryCode = '+' + x[1] + ' ';
    var operatorCode = x[2].length === 3 ? '(' + x[2] + ') ' : '(' + x[2];
    var firstBlock = x[3].length === 3 ? x[3] + '-' : x[3];
    var secondBlock = x[4].length === 2 ? x[4] + '-' : x[4];
    var thirdBlock = x[5];
    var fullNumber = !x[3] ? countryCode + operatorCode : countryCode + operatorCode + firstBlock + secondBlock + thirdBlock;
    e.target.value = !x[2] ? countryCode + '(' : fullNumber;
  }
});
