$(document).ready(function(){

  //бургер-меню

  $('.menu-link-box, .burger').click(function(){
    $('.burger').toggleClass('burger__append');
  });
});


$(document).ready(function(){

  // Карусель блока трассы

  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    $('#slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 1199,
          settings: 'unslick'
        },
      ]
    });
  }

});

$(document).ready(function(){

  // Карусель блока галерея

  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    $('#slider-gallery').slick({
      mobileFirst: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: 'unslick'
        },
      ]
    });
  }

});

$(document).ready(function(){

  // Карусель блока отзывы

  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    $('#slider-reviews').slick({
      mobileFirst: true,
      infinite: true,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
    });
  }

});

$(function () {

  // аккордион для блока с ценами на 320рх

  var el = $('#price-list li a');
  el.click(function() {
    var checkElement = $(this).next();
    
    checkElement.stop().animate({'height':'toggle'}, 500).parent().toggleClass('active');
    if(checkElement.is('ul')) {
      return false;
    }
  });
});

$(document).ready(function(){ 

  //кнопка прокрутки вверх

  $('#scroll-top-btn').on('click', function (event) { 
    event.preventDefault();
    $('body,html').animate({'scrollTop':0},1000); 
  });
  
  var timer;
  $(window).on('scroll', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      showScrollTopBtn();
    }, 100);
  });

  showScrollTopBtn();
  
  function showScrollTopBtn() {
    if( $(document).scrollTop() > 500 ) {
      $('#scroll-top-btn').fadeIn();
    }
    else {
      $('#scroll-top-btn').fadeOut();
    }
  }
  
});


