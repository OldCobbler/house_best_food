$(function(){

  $('.our-cooks__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false
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