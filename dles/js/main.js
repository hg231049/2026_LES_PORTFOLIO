/* 메인비주얼 애니메이션 */
/* async/await 방식 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function startVisualAnimation() {
  await delay(100);
  $(".visual-dimmed").addClass("show");

  await delay(2700);
  $(".main-visual .main-visual-title .visual-txt-ani").addClass("active");

  await delay(200);
  $(".main-visual .main-visual-title .visual-txt-motion > img").addClass(
    "rotate",
  );

  await delay(1200);
  $(".main-visual .scroll-down").addClass("on");
}
startVisualAnimation();

/* 메인 애니메이션 */
function animateM($item) {
  var scrollTop = $(window).scrollTop() + ($(window).height() / 5) * 4;
  if (scrollTop > $item.offset().top) {
    $item.addClass("motion");
  } else {
    $item.removeClass("motion");
  }
}
function showDiv() {
  var mainDivEl = $(".main-wrap > div");
  for (var i = 0; i < mainDivEl.length; i++) {
    animateM(mainDivEl.eq(i));
  }
}

/* about 배너 */
var about = document.getElementById("aboutThumb");
function mouseover() {
  about.setAttribute("src", "./dles/img/about-image-on.png");
}
function mouseleave() {
  about.setAttribute("src", "./dles/img/about-image.png");
}

/* etc */
let prdSwiper;
function initSwiper(bool, between, view) {
	if (typeof(prdSwiper) == 'object') prdSwiper.destroy();
	
	return prdSwiper = new Swiper('.etc-box .swiper-container', {
		spaceBetween: between,		
		slidesPerView: view,
		loop: bool,
		centeredSlides: bool,					
		grabCursor: true,
		//autoHeight : true,
		scrollbar: {
			el: '.etc-box .swiper-scrollbar',
			hide: false,
			draggable: true,
		},
		navigation: {	
			nextEl: '.etc-box .swiper-button-next',
			prevEl: '.etc-box .swiper-button-prev',
		},
	});
}

function mainSizeListener() {
	setTimeout(function(){

	var prdSlideH = $('.etc-project-wrap').height();
		document.documentElement.style.setProperty('--etc-project-height', prdSlideH + 'px');
	}, 1000);

	if ( $(window).outerWidth() <= 1024) {
		initSwiper(false, 0, 1);
	} else {
		initSwiper(true, 0, 1);
	}
}

$(window).resize(function(){
	mainSizeListener();
});

$(document).ready(function () {
  $(window).scroll(showDiv);
  mainSizeListener();

  /* 메인 슬라이드 배너 */
  $(".main-visual").css("opacity", "1");

  /* 흐르는 텍스트 */
  $(".flow-line-box").each(function () {
    for (var i = 0; i < 10; i++) {
      $(this)
        .find(".flow-txt em")
        .clone()
        .appendTo($(this).find(".flow-inner"));
    }
  });

  /* 팝업(상세) 이미지 열기 
  $(".etc-project-wrap .etc-box .prdList > li .etc-slide .thumbnail").each(
    function () {
      var thumbSrc = $(this).children(".thumb-detail").find("img");
      $(this).click(function (e) {
        $(".dimmed, .thumb-wrap, .thumb-wrap .close-btn").show();
        $("body").css("overflow", "hidden");
        $(".thumb-wrap .thumb-detail").html(thumbSrc);
      });
      $(".dimmed, .thumb-wrap .close-btn").click(function (e) {
        e.preventDefault();
        $(".thumb-wrap .thumb-detail").html("");
        $(".thumb-wrap").hide();
        $(".dimmed, .thumb-wrap .close-btn").hide();
        $("body").css("overflow", "");
      });
    },
  );*/

  /* 메인프로젝트 모션 */
  $(".project-box").each(function () {
    $(this)
      .children(".bn")
      .each(function () {
        $(this).addClass("_transXR");
        $(this).addClass("ani10");
      });
    $(this)
      .children(".project-desc-box")
      .each(function () {
        $(this).addClass("_transXL");
        $(this).addClass("ani10");
      });
  });

  /* contac 상단 흐르는 배경 */
  $(".contact-wrap .contact-bg").each(function () {
    for (var i = 0; i < 10; i++) {
      $(this).find("img").clone().appendTo($(this).find("span"));
    }
  });
});
