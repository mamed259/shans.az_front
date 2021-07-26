$(function(){

    // Nice select
    $(document).ready(function() {
        $('.js-nice-select').niceSelect();
        $('[data-fancybox="gallery"]').fancybox({});

        $('.profile-list-group li a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });


        $(".days").inputmask({"mask": "99:99 - 99:99"});
        $(".phone").inputmask({"mask": "(999)999-99-99"});

    });

    $(document).ready(function(){
        $('.input-upload').each(function () {
            $(this).on('change', function(e){
                var fileName = e.target.files[0].name;
                var res = fileName.substr(0, 13);
                $(this).parent().find('.cv-inner').text(res);

            });
        });

        $(".cv-delete").click(function() {
            $(this).parent().find('.cv-inner').text('');
        });
    });

      //Flatpickr
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth();
      var day = today.getDate();
      var finalDate = new Date(year - 18, month, day);
  
      var date = $('[data-id="date"]');
      var locale = $('html').attr('lang');
  
      // Date
      date.each(function () {
          var _this = $(this);
  
          _this.flatpickr({
              "locale": locale,
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d",
              disableMobile: true,
              maxDate: finalDate
          });
      });

});





