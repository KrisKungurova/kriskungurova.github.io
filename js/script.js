$(document).ready(function(){

  //бургер-меню

  $('#burger').on('click', function(){
    $('.burger').animate({'height':'toggle'}, 500).toggleClass('burger__append');
    return false;
  });
});

$(document).ready(function(){

  //переход по нажатию кнопки "купить билет" к соотв-му блоку

    $('a[href*=#btn-buy], a[href*=#trails], a[href*=#shares], a[href*=#reviews], a[href*=#price-desc]').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        if ($('.burger').hasClass('burger__append')) {
          $('.burger').animate({'height':'toggle'}, 500).toggleClass('burger__append');
        }
        else {

        }
        e.preventDefault();
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
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 4000,
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

  //убираем текст под слоем в блоке "Акции"

  $('.shares__block-color-layer').hover(function(){
    var colLayer = $(this);
    colLayer.parent().children('.shares__block-text').css('opacity','0');
  });

  $('.shares__block-color-layer').mouseleave(function(){
    var colLayer = $(this);
    colLayer.parent().children('.shares__block-text').css('opacity','1');
  });
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

  //модальное окно галереи

  $('.gallery__item').on('click', function(e){
    e.preventDefault();
    var link = $(this);
    var img = link.children('.gallery__item-img-lg');
    var src = img.attr('src');
    var h = img.attr('height');
    var w = img.attr('width');


    $('body').append('<div class="popup">'+
                      '<div class="popup_bg">' +
                        '<img src="'+src+'"class="popup_img" />'+
                      '</div>'+
                    '</div>');
    $('.popup_bg').css({'width': w,
                        'height': h});
    $('.popup').fadeIn(800);
    $('body').css('overflow-y','hidden');


    $('.popup').on('click', function(){
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

$(function () {

  // аккордион для блока с ценами на 320рх

  var el = $('#price-list li a');
  el.on('click', function() {
    var checkElement = $(this).next();
    
    checkElement.stop().animate({'height':'toggle'}, 500).parent().toggleClass('active');
    if(checkElement.is('ul')) {
      return false;
    }
  });
});

$(document).ready(function(){

  //подсчет цены

  $('input:checkbox').on('change', function(){
    $(this).parent().removeClass('price-desc--check');
    $('span').removeClass('price-desc__check-icon');
    calcPrice();
  });

  calcPrice();

  function calcPrice() {
    var price = 0;
    

    $('input:checked').each(function(){
      price = price + $(this).data('price');
      $(this).parent().addClass('price-desc--check');
      $(this).parent().append('<span class="price-desc__check-icon"></span>');
    });

    $('#price-view').text(price+' р');
  }


  //подсчет цены 320px
  priceMobile();
   function priceMobile(e) {
    if ($('#child').attr('checked')=='checked' && $('#all').attr('checked')=='checked') {
        $('#three-hours').attr('data-time', '2200');
      }
    else if ($('#child').attr('checked')=='checked' && $('#climbing-wall').attr('checked')=='checked') {
        $('#three-hours').attr('data-time', '1000');
      }
    else if ($('#child').attr('checked')=='checked' && $('#rope-park').attr('checked')=='checked') {
        $('#three-hours').attr('data-time', '1200');
      }
    else if ($('#child').attr('checked')=='checked' && $('#all').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '5500');
      }
    else if ($('#child').attr('checked')=='checked' && $('#climbing-wall').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '3000');
      }
    else if ($('#child').attr('checked')=='checked' && $('#rope-park').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '4000');
      }

    else if ($('#adult').attr('checked')=='checked' && $('#all').attr('checked')=='checked') {
        $('#three-hours]').attr('data-time', '2500');
      }
    else if ($('#adult').attr('checked')=='checked' && $('#climbing-wall').attr('checked')=='checked') {
        $('#three-hours]').attr('data-time', '1300');
      }
    else if ($('#adult').attr('checked')=='checked' && $('#rope-park').attr('checked')=='checked') {
        $('#three-hours]').attr('data-time', '1500');
      }
    else if ($('#adult').attr('checked')=='checked' && $('#all').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '6000');
      }
    else if ($('#adult').attr('checked')=='checked' && $('#climbing-wall').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '3500');
      }
    else if ($('#adult').attr('checked')=='checked' && $('#rope-park').attr('checked')=='checked') {
        $('#twelve-hours').attr('data-time', '4500');
      }
  }

  $('input:radio').on('change', function(){
    $(this).parent().removeClass('price-desc--check');
    $('span.price-desc__check-icon').remove();
    priceMobile();
    calcPriceMobile();
    });

    calcPriceMobile();

    function calcPriceMobile() {
      

      var time = 0;

      $('input:checked').each(function(){
        time = time + $(this).data('time');
        $(this).parent('li').addClass('price-desc--check');
        $(this).parent().append('<span class="price-desc__check-icon"></span>');
      });

      $('#price__digits').text(time+' р');
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
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 4000,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 4000,
          }
        },
      ]
    });
  }

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
