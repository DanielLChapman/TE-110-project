//= require vendor/jquery

  function swapImages(){
      var $active = $('#myGallery .active');
      var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first');
      $active.fadeOut(1000, function(){
      $active.removeClass('active');
      $next.fadeIn(1000).addClass('active');
      });
    }

  $(document).ready(function(){
      setInterval('swapImages()', 2500);
      $(".page-1").click(function() {
        $('#second').removeClass('gallery');
        $('#first').addClass('gallery');
      });
      $(".page-2").click(function() {
        $('#second').addClass('gallery');
        $('#first').removeClass('gallery');
      });
    });