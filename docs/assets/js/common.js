$(function () {
	$(document).ready(function() {
		navFunc()
	function navFunc(){
		if (window.matchMedia('(min-width: 769px)').matches) {
			 if (window.matchMedia('(max-width: 1920px)').matches) {
				 var nw = $(window).width() - $('.keyvisual').width()-33;
			 }else{
				 var nw = $(window).width() - (($(window).width() - $('.site-header .inner').width()) / 2+$('.keyvisual').width())-33;
			 }
		 		$('.bg-gnav').css("width",nw+'px');
				 $('.global-nav').css("width",nw+'px');
		}
	}
		headerHight = 0;
		id = location.hash;
   if (window.matchMedia('(min-width: 769px)').matches) {
       headerHight = $('.site-header').height();
    }else{
				headerHight = $('.site-header').height();
		}
    if ( '' != id ) {
    var position = $(id).offset().top - headerHight;
    $("html, body").animate({scrollTop:position}, 0 , "swing");
    }

  	$('.nav-toggle-wrap').click(function () {
		$(this).toggleClass("active");
			$(this).children('.nav-toggle').toggleClass("active");
			$('.navigation').toggleClass('active');
		});
	$('.global-nav a').click(function () {
			$('.nav-toggle-wrap').removeClass("active");
			$('.nav-toggle-wrap .nav-toggle').removeClass("active");
			$('.navigation').removeClass('active');
		});
  $('a[href^="#"]').click(function () {
			if (window.matchMedia('(min-width: 769px)').matches) {
					headerHight = $('.site-header').height();
			
    }else{
					headerHight = $('.site-header').height();
    }
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
		asideFunc();
		function asideFunc(){
			if ($(this).scrollTop() > ($(window).height() / 2)) {
		      $("aside a").addClass("active");
		      $(".backtotop").addClass("active");
		   } else {
		   	$("aside a").removeClass("active");
		      $(".backtotop").removeClass("active");
		  }
		}
  $(window).scroll(function () {
    asideFunc();
  });
  var timer3;
  $(window).resize(function() {
    if (timer3 > 0) {
      clearTimeout(timer3);
    }
    timer3 = setTimeout(function () {
			navFunc();
    }, 300);
  });
		
	});
});
	$(window).on('load', function() {
	
	});