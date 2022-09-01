(function ($) {
    "use strict";
    
    
    /* cart search */
    $(".icon-cart , .search-toggle").on("click", function() {
        $(this).parent().find('.shopping-cart-content , .search-content').slideToggle('medium');
    })
    
    /* slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* course-slider-active */
    $('.slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* course-slider-active */
    $('.course-slider-active').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    
    /* event-active */
    $('.event-active').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30,
        item: 3,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    
    /* event-active */
    $('.course-slider-active-2').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30,
        item: 4,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    /* event-active */
    $('.event-gallery-active').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30,
        item: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Product img slider */
    $('.producta-active').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation b-navigation-prev "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation b-navigation-next active"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* Product img slider */
    $('.related-slider-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation b-navigation-prev "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation b-navigation-next active"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* Product img slider */
    $('.course-slider-active-3').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation b-navigation-prev "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation b-navigation-next active"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* Product img slider */
    $('.course-slider-active-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation2 b-navigation-prev2 "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation2 b-navigation-next2 active2"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* Product img slider */
    $('.course-slider-active-5').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation3 b-navigation-prev3 "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation3 b-navigation-next3 active3"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* event-active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30,
        item: 6,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items:6
            }
        }
    })
    
    /* Product img slider */
    $('.blog-active').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class="b-navigation b-navigation-prev "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="b-navigation b-navigation-next active"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    
    /* Product img slider */
    $('.event-active-2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="e-navigation e-navigation-prev "><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="e-navigation e-navigation-next active"><i class="fa fa-angle-right"></i></span>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                
              }
            },
            {
              breakpoint: 420,
              settings: {
                
              }
            }
        ]
    });
    
    /*--
    Service Active
    -----------------------------------*/
    $('.b-navigation ')
        .click(function() {
        $('.b-navigation').removeClass('active');
        $(this).addClass('active');
    });
    /*--
    Service Active
    -----------------------------------*/
    $('.b-navigation3 ')
        .click(function() {
        $('.b-navigation3').removeClass('active3');
        $(this).addClass('active3');
    });
    /*--
    Service Active
    -----------------------------------*/
    $('.b-navigation2 ')
        .click(function() {
        $('.b-navigation2').removeClass('active2');
        $(this).addClass('active2');
    });

    
    /*--
    Service Active
    -----------------------------------*/
    $('.producta-active .owl-nav div')
        .click(function() {
        $('.producta-active .owl-nav div').removeClass('active');
        $(this).addClass('active');
    });
    
    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    // MOUSE MOVING BACKGTOUND 1
    $('#register-1').mouseParallax({
        moveFactor: 2
    });
    
    $('#register-2').mouseParallax({
        moveFactor: 2
    });
    
    $('#register-3').mouseParallax({
        moveFactor: 1
    });
    
    
    /*--
    Testimonial Slick Carousel
    -----------------------------------*/
        $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider',
    });
    
    /*--
        Testimonial Slick Carousel as Nav
    -----------------------------------*/
    $('.testimonial-image-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 3,
            centerMode: false,
          }
        },
        {
          breakpoint: 420,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 2,
            centerMode: false,
          }
        }
      ]
    });
    
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick'); 
        }
    });
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    $('.commrnt-toggle a').on('click', function(e) {
        e.preventDefault();
        $('.blog-comment-content-wrap').slideToggle(1000);
    });
    
    
    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
    
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /*--
	   pro-details color Active
    -----------------------------------*/
    $('.pro-details-color2-content ul li')
	.on('click', function() {
		$('.pro-details-color2-content ul li').removeClass('active');
		$(this).addClass('active');
	});
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    
    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function() {
        $('.thumb-menu a').removeClass('active');
    })
    
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    
    
})(jQuery);	

// faq's section

function Whats() {
  document.getElementById('whatsnew').style.display = 'block';
  document.getElementById('esefaqs').style.display = 'none';
  document.getElementById('gatefaqs').style.display = 'none';

  document.getElementById('first').style.backgroundColor = "green";
  document.getElementById('third').style.backgroundColor = "rgb(77,175,77)";
  document.getElementById('second').style.backgroundColor = "rgb(77,175,77)";

  document.getElementById("isttriangle").style.display="block";
  document.getElementById("sectriangle").style.display="none";
  document.getElementById("thirdtriangle").style.display="none";

  
}

function ese() {
  document.getElementById('whatsnew').style.display = 'none';
  document.getElementById('esefaqs').style.display = 'block';
  document.getElementById('gatefaqs').style.display = 'none';

  document.getElementById('second').style.backgroundColor = "green";
  document.getElementById('first').style.backgroundColor = "rgb(77,175,77)";
  document.getElementById('third').style.backgroundColor = "rgb(77,175,77)"; 

  document.getElementById("isttriangle").style.display="none";
  document.getElementById("sectriangle").style.display="block";
  document.getElementById("thirdtriangle").style.display="none";


}
function gate() {
  document.getElementById('whatsnew').style.display = 'none';
  document.getElementById('esefaqs').style.display = 'none';
  document.getElementById('gatefaqs').style.display = 'block';

  document.getElementById('second').style.backgroundColor = "rgb(77,175,77)";
  document.getElementById('first').style.backgroundColor = "rgb(77,175,77)";
  document.getElementById('third').style.backgroundColor = "green";

  document.getElementById("isttriangle").style.display="none";
  document.getElementById("sectriangle").style.display="none";
  document.getElementById("thirdtriangle").style.display="block";


 

}


function param(){
  var x = document.getElementsByClassName("para");
  if (x[0].style.display === "none") {
    x[0].style.display = "block";
  } else {
    x[0].style.display = "none";
  }
}
function paramone(){
  var x = document.getElementsByClassName("para");
  if (x[1].style.display === "none") {
    x[1].style.display = "block";
  } else {
    x[1].style.display = "none";
  }
}
function paramtwo(){
  var x = document.getElementsByClassName("para");
  if (x[2].style.display === "none") {
    x[2].style.display = "block";
  } else {
    x[2].style.display = "none";
  }
}
function paramthree(){
  var x = document.getElementsByClassName("para");
  if (x[3].style.display === "none") {
    x[3].style.display = "block";
  } else {
    x[3].style.display = "none";
  }
}
function paramfour(){
  var x = document.getElementsByClassName("para");
  if (x[4].style.display === "none") {
    x[4].style.display = "block";
  } else {
    x[4].style.display = "none";
  }
}
function paramfive(){
  var x = document.getElementsByClassName("para");
  if (x[5].style.display === "none") {
    x[5].style.display = "block";
  } else {
    x[5].style.display = "none";
  }
}
function paramsix(){
  var x = document.getElementsByClassName("para");
  if (x[6].style.display === "none") {
    x[6].style.display = "block";
  } else {
    x[6].style.display = "none";
  }
}
function paramseven(){
  var x = document.getElementsByClassName("para");
  if (x[7].style.display === "none") {
    x[7].style.display = "block";
  } else {
    x[7].style.display = "none";
  }
}
function parameight(){
  var x = document.getElementsByClassName("para");
  if (x[8].style.display === "none") {
    x[8].style.display = "block";
  } else {
    x[8].style.display = "none";
  }
}
function paramnine(){
  var x = document.getElementsByClassName("para");
  if (x[9].style.display === "none") {
    x[9].style.display = "block";
  } else {
    x[9].style.display = "none";
  }
}
function paramten(){
  var x = document.getElementsByClassName("para");
  if (x[10].style.display === "none") {
    x[10].style.display = "block";
  } else {
    x[10].style.display = "none";
  }
}
function paramo(){
  var x = document.getElementsByClassName("para");
  if (x[11].style.display === "none") {
    x[11].style.display = "block";
  } else {
    x[11].style.display = "none";
  }
}
function paramt(){
  var x = document.getElementsByClassName("para");
  if (x[12].style.display === "none") {
    x[12].style.display = "block";
  } else {
    x[12].style.display = "none";
  }
}
function paramth(){
  var x = document.getElementsByClassName("para");
  if (x[13].style.display === "none") {
    x[13].style.display = "block";
  } else {
    x[13].style.display = "none";
  }
}
function paramf(){
  var x = document.getElementsByClassName("para");
  if (x[14].style.display === "none") {
    x[14].style.display = "block";
  } else {
    x[14].style.display = "none";
  }
}
function paramfv(){
  var x = document.getElementsByClassName("para");
  if (x[15].style.display === "none") {
    x[15].style.display = "block";
  } else {
    x[15].style.display = "none";
  }
}
function params(){
  var x = document.getElementsByClassName("para");
  if (x[16].style.display === "none") {
    x[16].style.display = "block";
  } else {
    x[16].style.display = "none";
  }
}
function paramsv(){
  var x = document.getElementsByClassName("para");
  if (x[17].style.display === "none") {
    x[17].style.display = "block";
  } else {
    x[17].style.display = "none";
  }
}
function paramse(){
  var x = document.getElementsByClassName("para");
  if (x[18].style.display === "none") {
    x[18].style.display = "block";
  } else {
    x[18].style.display = "none";
  }
}
function paramsn(){
  var x = document.getElementsByClassName("para");
  if (x[19].style.display === "none") {
    x[19].style.display = "block";
  } else {
    x[19].style.display = "none";
  }
}
function paramst(){
  var x = document.getElementsByClassName("para");
  if (x[20].style.display === "none") {
    x[20].style.display = "block";
  } else {
    x[20].style.display = "none";
  }
}
function paramsel(){
  var x = document.getElementsByClassName("para");
  if (x[21].style.display === "none") {
    x[21].style.display = "block";
  } else {
    x[21].style.display = "none";
  }
}
function paramstw(){
  var x = document.getElementsByClassName("para");
  if (x[22].style.display === "none") {
    x[22].style.display = "block";
  } else {
    x[22].style.display = "none";
  }
}


