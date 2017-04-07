// ONE PAGE SKROLL API
$(".maincontent").onepage_scroll({
  sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000, // AnimationTime let you define how long each section takes to animate
  pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {


  }, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {
    var link = $("[href='" + (index - 1) + "']"),
      item = link.closest(".fixed-menu__item"),
      menu = link.closest(".fixed-menu"),
      items = menu.find(".fixed-menu__item");
    items.removeClass('active');
    item.addClass("active");
  }, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
$('.nav__link').on('click', function(e) {
  e.preventDefault();

  var href = parseInt($(this).attr('href'));
  $(".maincontent").moveTo(href + 1);


});
$('.order-link').on('click', function(q) {
  q.preventDefault();

  $(".maincontent").moveTo(7);

});
$('.burgers-slider__buy').on('click', function(q) {
  q.preventDefault();

  $(".maincontent").moveTo(7);

});
$('.fixed-menu__link').on('click', function(e) {
  e.preventDefault();
  var link = $(this),
    item = link.closest(".fixed-menu__item"),
    menu = link.closest(".fixed-menu"),
    items = menu.find(".fixed-menu__item");
  var href = parseInt($(this).attr('href'));
  $(".maincontent").moveTo(href + 1);

  items.removeClass('active');
  item.addClass("active");




});




//yandex


YMaps.jQuery(function() {
  // Создает экземпляр карты и привязывает его к созданному контейнеру
  var map = new YMaps.Map(YMaps.jQuery("#MapID")[0]);
  // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
  map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 12);

  // Создает стиль
  var s = new YMaps.Style();
  // Создает стиль значка метки
  s.iconStyle = new YMaps.IconStyle();
  // Задаем путь для иконки
  s.iconStyle.href = "./img/icon/map-marker.svg";
  // Размер иконки
  s.iconStyle.size = new YMaps.Point(46, 57.719);
  // Сдвиг относительно точки позиционирования
  s.iconStyle.offset = new YMaps.Point(0, 0);

  // Создает метку
  var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.64, 55.76), {
    style: s
  });
  // Устанавливает содержимое балуна
  placemark.name = "Москва"; // Заголовок
  placemark.description = "Столица России"; // содержание
  map.addOverlay(placemark); // Добавляет метку на карту

  var placemark1 = new YMaps.Placemark(new YMaps.GeoPoint(37.63, 55.75), {
    style: s
  });
  placemark1.name = "ОП!";
  placemark1.description = "";
  map.addOverlay(placemark1);

  var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(37.62, 55.70), {
    style: s
  });
  placemark2.name = "ОПП!!";
  placemark2.description = "";
  map.addOverlay(placemark2);

  var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(37.6, 55.763), {
    style: s
  });
  placemark3.name = "ОППА!!!";
  map.addOverlay(placemark3);
})




// SLICK SLIDER
$('.burgers-slider').slick({
  arrows: true,
  prevArrow: $(".burger-slider__btn_prev"),
  nextArrow: $(".burger-slider__btn_next")
});
// VERTICAL ACCO
$(function() {
  $(".team-acco__trigger").on("click", function(e) {
    e.preventDefault();
    var $this = $(this),
      item = $this.closest(".team-acco__item"),
      container = $this.closest(".team-acco"),
      items = container.find(".team-acco__item"),
      content = item.find(".team-acco__content"),
      otherContent = container.find('.team-acco__content');

    if (!item.hasClass("active")) {
      items.removeClass('active');
      item.addClass("active");
      otherContent.slideUp();
      content.slideDown();
    } else {
      item.removeClass("active");
      content.slideUp();
    }


  });
});

//////////////////////////// horizontal ACCO
$(function() {
  $(".menu-acco__trigger").on("click", function(e) {
    e.preventDefault();
    var $this = $(this),
      item = $this.closest(".menu-acco__item"),
      container = $this.closest(".menu-acco"),
      items = container.find(".menu-acco__item"),
      content = item.find(".menu-acco__content"),
      activeItem = items.filter('.active'),
      activeContent = activeItem.find(".menu-acco__content");

    if (!item.hasClass("active")) {
      items.removeClass('active');
      item.addClass("active");
      activeContent.animate({
        "width": "0px"

      });
      content.animate({
        "width": "550px"
      });
    } else {
      item.removeClass("active");
      content.animate({
        "width": "0px"
      });
    }


  });
  $(document).on('click', function(e) {
    var $this = $(e.target);
    if (!$this.closest('.menu-acco').length) {
      $(".menu-acco__content").animate({
        'width': "0px"
      });
      $(".menu-acco__item").removeClass("active");
    }
  });
});
// INPUT MASK API
$(function() {
  $(".phone-mask").inputmask("+7 (999) 999 99 99");
});
// FANCYBOX API
$(function() {
  $('.review__view').fancybox({
    type: 'inline',
    maxWidth: 460,
    fitToView: false,
    padding: 0
  });
  $(".full-review__close").on("click", function(e) {
    e.preventDefault();
    $.fancybox.close();

  })
});


$(function() {


  $("#order__form").on("submit", function(e) {
    e.preventDefault();

    var form = $(this),
      formData = form.serialize();
    $.ajax({
      url: '/action.php',
      type: 'POST',
      data: formData,
      success: function(data) {

        var popup = data.status ? '#success' : '#error';

        $.fancybox.open([{
          href: popup
        }], {
          type: 'inline',
          maxWidth: 250,
          fitToView: false,
          padding: 0,
          afterClose: function() {
            form.trigger('reset');
          }
        });

      }

    });

  });

  $(".status-popup__close").on("click", function(e) {
    e.preventDefault();

    $.fancybox.close();

  })

});