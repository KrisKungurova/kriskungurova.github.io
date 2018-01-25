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

// $(document).ready(function(){

//   //обводка выбранной цены

//   $('.price-desc__item').on('click',function(){

//     $('.price-desc__item').append('<span class="checked-icon"></span>');
//     $('.price-desc__item').addClass('border-active');

//   });
//   $('.price-desc__item').dblclick(function(){
//       $('.checked-icon').remove();
//       $('.price-desc__item').removeClass('border-active');
//     });
// });


$(document).ready(function(){

  //подсчет цены

  $('#price input:radio').on('change', function(){
    calcPrice();
  });

  calcPrice();

  function calcPrice() {
    var price = 0;

    $('#price input:checked').each(function(){
      price = price + $(this).data('price');
    });

    $('#price-view').text(price);
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
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
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

$(document).ready(function(){

  //модальное окно галереи

  $('#btn-modal-first').click(function(){
    var img = new Image();
    img.src = '../img/desc/photo1modal.jpg';

    $('body').append('<div class="popup">'+
                      '<div class="popup_bg">' +
                        '<img src="'+img.src+'"class="popup_img" />'+
                        '<span class="close-modal icon"></span>'+
                      '</div>'+
                    '</div>');
    $('.popup').fadeIn(800);
    $('body').css('overflow-y','hidden');

    $('.close-modal').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $('.popup_bg').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $(document).keydown(function(eventObject){
      if (eventObject.which == 27)
        $('popup').fadeOut(800);
        $('body').css('overflow-y','');

        setTimeout(function(){
          $('.popup').remove();
        }, 800);
    });
  });


  $('#btn-modal-second').click(function(){
    var img = new Image();
    img.src = '../img/desc/photo2.jpg';

    $('body').append('<div class="popup">'+
                      '<div class="popup_bg">' +
                        '<img src="'+img.src+'"class="popup_img" />'+
                        '<span class="close-modal icon"></span>'+
                      '</div>'+
                    '</div>');
    $('.popup').fadeIn(800);
    $('body').css('overflow-y','hidden');

    $('.close-modal').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $('.popup_bg').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $(document).keydown(function(eventObject){
      if (eventObject.which == 27)
        $('popup').fadeOut(800);
        $('body').css('overflow-y','');

        setTimeout(function(){
          $('.popup').remove();
        }, 800);
    });
  });

  $('#btn-modal-third').click(function(){
    var img = new Image();
    img.src = '../img/desc/photo3.jpg';

    $('body').append('<div class="popup">'+
                      '<div class="popup_bg">' +
                        '<img src="'+img.src+'"class="popup_img" />'+
                        '<span class="close-modal icon"></span>'+
                      '</div>'+
                    '</div>');
    $('.popup').fadeIn(800);
    $('body').css('overflow-y','hidden');

    $('.close-modal').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $('.popup_bg').click(function(){
      $('popup').fadeOut(800);
      $('body').css('overflow-y','');

      setTimeout(function(){
        $('.popup').remove();
      }, 800);
    });

    $(document).keydown(function(eventObject){
      if (eventObject.which == 27)
        $('popup').fadeOut(800);
        $('body').css('overflow-y','');

        setTimeout(function(){
          $('.popup').remove();
        }, 800);
    });
  });

});
