//= require vendor/jquery

  $(document).ready(function(){
      $('#standard').click(function() {
        var $active = $('.md-modal');
        $active.addClass('.md-show');
      });
      $('#menu').click(function() {
        var $active = $('.md-modal');
        $active.addClass('.md-show');
      });
      $('.md-cose').click(function() {
        var $active = $('.md-modal');
        $active.removeClass('.md-show');
      });
    });