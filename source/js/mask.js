'use strict';
(function () {
  var onInputMaskPhone = function () {
    var im = new window.InputMask('+9 (999) 999-99-99');
    im.mask(document.querySelector('[name=user-phone]'));
    im.mask(document.querySelector('[name=footer-phone]'));
  };

  onInputMaskPhone();
})();
