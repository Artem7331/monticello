$('.slider').slick({
  	dots: true,
  infinite: true,
  speed: 400,
  draggable:true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: false,
  autoplay: true,
  pauseOnDotsHover: true,
  arrows:false
  // appendDots: $(‘.appendDots’),
  // dotsClass: "my-dots",
  });

$(document).ready(function(){
  // $('.ba-slider').slick();
  $('.ba-slider').slick({
  	// dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  // prevArrow: '<div class="prev"></div>',
  // nextArrow: '<div class="next"></div>'
  });
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });

        var image = 'img/marker.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map,
          icon: image
        })
      }


 $(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
