'use strict';
(function () {
  var scroll = new window.SmoothScroll('a[href*="#"]');
})();

(function () {
  var im = new window.Inputmask('+9 (999) 999-99-99');
  im.mask(document.querySelector('[name=user-phone]'));
  im.mask(document.querySelector('[name=footer-phone]'));
})();
