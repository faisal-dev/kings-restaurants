// jshint devel:true
console.log('\'Allo \'Allo!');

var king = {
  init: function() {

    var
      welcomeBtn = $('#welcome'),
      loadingElem = $('#loading'),
      coverElem = $('.cover'),

      menuBtn = $('.btn-menu'),
      sideMenu = $('.side-menu'),

      contentElem = $('.content'),

      iconElem = $('.icon'),

      itemElem = $('.item');


    // Cover controller
    welcomeBtn.on('click', function(event) {
      event.preventDefault();

      /* Act on the event */
      $(this).addClass('bounce-out');

      setTimeout(function() {
        welcomeBtn.addClass('hidden');
        loadingElem.removeClass('hidden').addClass('bounce-in');
      }, 500);

      setTimeout(function() {
        window.location.replace("home.html");
      }, 2000)
    });

    // side-men controller
    if(window.innerWidth >= 768) {
      sideMenu.toggleClass('on');
    }
    menuBtn.on('click', function(event) {
      event.preventDefault();

      // Act on the even
      // $(this).addClass('close');
      sideMenu.toggleClass('on');
      contentElem.toggleClass('slide-to-r');
    });

    // icon controller
    iconElem.hover(function() {
      $(this).addClass('animated bounce');
    }, function() {
      $(this).removeClass('animated bounce');
    });

    // gallery controller
    $('.card').on('click', function(event) {
      event.preventDefault();
      $(this).find('.detail').toggleClass('hidden');
    });

    $('.btn-book').on('click', function(event) {
      // event.preventDefault();
      event.stopPropagation();
      // $(this).modal('show');
    });

    $('.btn-comment').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      $($(this).closest('.card')).next().toggleClass('visible');
      $('.owl-wrapper-outer').toggleClass('overflow-visible');
      $('.comments-box').css('height', $('.card').height());
      if(window.innerWidth >= 980) {
        // console.log($($(this).closest('.owl-item')).prev());
        // $($(this).closest('.owl-item')).prev().toggleClass('pull-right');
        $(this).closest('.owl-item').toggleClass('move-left');
        $(this).closest('.owl-wrapper').toggleClass('full-vh');
        $($(this).closest('.owl-item')).toggleClass('extended');
        $('.comments-box').css('height', $('.extended .card').height());
        // console.log($('.extended .card').height());
      }
    });
  },

  // toggleToPrev: function(elem, className) {
  //   if(elem.prev().length === 1) {
  //     $(elem.prev()).addClass(className);
  //     console.log(elem.prev().length);
  //   } else {
  //     console.log(elem.prev().length);
  //     return false;
  //   }
  //   // console.log(elem.prev().length);
  //   king.toggleToPrev($(elem.prev()));
  // }
};

$(document).ready(function() {

  $("#promotion-galleries").owlCarousel({
    items: 4,
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });
  $("#foods-galleries").owlCarousel({
    items: 4,
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });
  $("#drinks-galleries").owlCarousel({
    items: 4,
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });
  $("#bbq-galleries").owlCarousel({
    items: 4,
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });
  $("#fast-foods-galleries").owlCarousel({
    items: 4,
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });

  king.init();

})
