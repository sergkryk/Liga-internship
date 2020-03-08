/* eslint-disable */
var Inputmask = require('inputmask');
var SmoothScroll = require('smooth-scroll');
var svg4everybody = require('svg4everybody');

var smoothScroll = new SmoothScroll('a[href*="#"]');
svg4everybody();

var onInputMaskPhone = function () {
  var im = new Inputmask('+9 (999) 999-99-99');
  im.mask(document.querySelector('[name=user-phone]'));
  im.mask(document.querySelector('[name=footer-phone]'));
};

onInputMaskPhone();
