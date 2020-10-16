function main() {

(function () {
   'use strict';

    // $('.flouting').click(function() {
    //   $('body').addClass('overflow');
    //   $('.wrapper-right-block').fadeIn();
    //   $(this).fadeOut();
    // });
    // $('.close').click(function() {
    //   $('body').removeClass('overflow');
    //   $('.wrapper-right-block').fadeOut();
    //   $('.flouting').fadeIn();
    // });

    /* Scroll to top */
    $(window).scroll(function() {
      var $toTop = $('#totop');
      if ($(this).scrollTop() > 100) {
        $toTop.fadeIn();

      } else {
        $toTop.fadeOut();
      }
    });
    $(window).scroll(function() {
      var    $leftBanner = $('.left_banner');
      if ($(this).scrollTop() > 100) {
        $leftBanner.addClass('remove');

      } else {
        $leftBanner.removeClass('remove');
      }
    });
    $(window).scroll(function() {
      var $fixedtop = $('.navbar-fixed-top');
      if ($(this).scrollTop() > 10) {
        $('.navbar-collapse.collapse').removeClass('in');
      } 
      else { }
    });

    $(document).on('click', "a[href='#totop']", function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $(".box-btn-choose").on('click', function(){
        $(".payment-step-2").removeClass('hidden',1000);
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            setTimeout(function(){
            $('html,body').animate({
              scrollTop: target.offset().top - 20
            }, 1500);}, 1200);
            return false; 
          }
        }
    });

    // Menu fixded
      if ($('header .header-main').length && $('header .header-main').hasClass('gp-header-sticky')) {
        var header_position = $('header .header-main').offset(),
          lastScroll = 50;
        var window_height = $(window).height();
        $(window).on('scroll load', function(event) {
          var st = $(this).scrollTop();
          if (st > header_position.top  && document.documentElement.clientWidth < 768) {
            if ($(".gp-header-table").length)
              $('header .gp-header-table').addClass("gp-header-fixed");
            else
              $('header .header-main').addClass("gp-header-fixed");
              $('.wrapper_content').addClass("active_block");
          } else {
            if ($(".gp-header-table").length)
              $('header .gp-header-table').removeClass("gp-header-fixed");
            else
              $('header .header-main').removeClass("gp-header-fixed");
              $('.wrapper_content').removeClass("active_block");
          }

          if (st > lastScroll && st > header_position.top  && document.documentElement.clientWidth < 768) {
            if ($(".gp-header-table").length)
              $('header .gp-header-table').addClass("gp-hidden-menu");
            else
              $('header .header-main').addClass("gp-hidden-menu");
          } else if (st <= lastScroll) {
            if ($(".gp-header-table").length)
              $('header .gp-header-table').removeClass("gp-hidden-menu");
            else
              $('header .header-main').removeClass("gp-hidden-menu");
          }

          lastScroll = st;
        });
      }

    // Timer Initialization
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      // var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        // 'days': days,
        // 'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function myFunction() {
      var copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      // var daysSpan = clock.querySelector('.days');
      // var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        // daysSpan.innerHTML = t.days;
        // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          document.getElementById("countdown").className = "hidden";
          document.getElementById("deadline-message").className = "visible";
          clearInterval(timeinterval);
          return true;
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline=" 16:00 ";
    var deadline = new Date(Date.parse(new Date()) + 15 * 60 * 1000); // for endless timer
    initializeClock('countdown', deadline);


}());


}
main();
