$(function () {
	$(document).ready(function() {
	
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
			
			$('.site-main').toggleClass("active");
		$(this).toggleClass("active");
			$(this).children('.nav-toggle').toggleClass("active");
			$('.global-nav').toggleClass('active');
		});
	$('.global-nav a').click(function () {
			$('.nav-toggle-wrap').removeClass("active");
			$('.nav-toggle-wrap .nav-toggle').removeClass("active");
			$('.global-nav').removeClass('active');
		$('.site-main').removeClass("active");
		});
  $('a[href^="#"]').click(function () {
		var speed = 1000;
    var href = $(this).attr("href");
		if ($(this).hasClass("video_link")) {
			$(href).fadeIn(500);
			$(href).addClass("active");
			ww = $(window).width();
			if(href == "#video01"){
				player.playVideo();
				$(".follower").addClass('display_none');
			}
		} else {
			if (window.matchMedia('(min-width: 769px)').matches) {
					headerHight = $('.site-header').height();
			
    }else{
					headerHight = $('.site-header').height();
    }
    
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
		}
  });
		asideFunc();
		function asideFunc(){
			if ($(this).scrollTop() > 500) {
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
			
    }, 300);
  });
		
	});


});
	// video
// ------------------------------------------------------------------------------------
$(document).on('click','.close_btn, .video_bg',function() {
	// $(this).parent().find("video").get(0).pause();
	
	player.seekTo(0);
	// player2.seekTo(0);

	player.pauseVideo();
	// player2.pauseVideo();

	$(".follower").removeClass('display_none');
	$(".video.active").fadeOut(500);
});


   // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  
  var player;
  var player2;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
    playerVars: { 
             'autoplay':       0,
             'controls':       1, 
             'rel':            0,
             'showinfo':       0,
      },
      height: '360',
      width: '640',
      videoId: '1NOsVOvjp38',
      host: 'https://www.youtube-nocookie.com'
    });
   //  player2 = new YT.Player('ytplayer2', {
	  // playerVars: { 
   //           'autoplay':       0,
   //           'controls':       1, 
   //           'rel':            0,
   //           'showinfo':       0,
   //    },
   //    height: '360',
   //    width: '640',
   //    videoId: '8ThUogkxJK4',
   //    host: 'https://www.youtube-nocookie.com'
   //  });
  } 
	$(window).on('load', function() {
	
	});