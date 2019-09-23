var $ = require("jquery");


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $('.nav-bar').addClass('shrink');
      $('.btn-primary').addClass('shrink-btn');

    } else {
      $('.nav-bar').removeClass('shrink');
      $('.btn-primary').removeClass('shrink-btn');
    }
  })

  $('.nav-burger').click(function() {
    $('.nav-bar__list').toggleClass('mobileList');
    $('.nav-burger__line').toggleClass('toggle');
    $('.nav-bar__wrap').toggleClass('mobileWrap');
    $('.nav-burger__line').toggleClass('black');

  });

})