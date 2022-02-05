$(function(){

  $('.header__menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.our-cooks__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          dots: false,
          
        }
      }
    ]
  });

  $('.reviews-slider').slick({
    arrows: false,
    dots: true,
  });

  $('.dishes__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.dishes__slider-min',
  });
  $('.dishes__slider-min').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.dishes__slider-big',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true
  });
});