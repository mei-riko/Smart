import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
  
    // Input mask
    if( $('.phone').length > 0 ) {
      $(".phone").inputmask({
        mask: "8 999 999 99 99",
        placeholder: " ",
        showMaskOnHover: true,
        onincomplete: function(){ 
          $(this).closest("form").addClass('error-phone'); 
          $(this).addClass('error'); 
          $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
        }, 
        oncomplete: function(){ 
            $(this).closest("form").removeClass('error-phone'); 
            $(this).removeClass('error'); 
            $(this).siblings(".error_phone").removeClass('error').html(''); 
        },
      })
    }
    $('input.phone').on('keydown', function(event) {
        if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
            event.preventDefault();
            $(this).blur();
            return false;
        }
    });

    // Slider
    if( $('.slider_license').length > 0 ){
        let $status = $('.slider-numeric');
        let $slickElementIndex = $('.slider_license#index-slider');
    
        $slickElementIndex.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });
        $slickElementIndex.slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });

        let $slickElementStudy = $('.slider_license#study-slider');
        $slickElementStudy.slick({
            slidesToShow: 4,
            arrows: false,
            responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                  }
                }
            ]
        });
    }

    // Navbar
    $(".nav__item_has-child .nav__link.nav__link_parent").on("click", function(e){
        e.preventDefault();
        let href = $(this).data("href");

        if( $( this ).hasClass("nav__link--active") ){
            $( this ).removeClass("nav__link--active");
            $( href ).removeClass("nav__dropdown--active");
            $( href ).slideUp();
        }else{
            // remove active    
            let hrefActive = $(".nav__item_has-child .nav__link.nav__link--active").data("href");
            $( hrefActive ).removeClass("nav__dropdown--active");
            $( hrefActive ).slideUp();
            $(".nav__item_has-child .nav__link.nav__link--active").removeClass("nav__link--active");
            // add active status
            $( this ).addClass("nav__link--active");
            $( href ).addClass("nav__dropdown--active");
            $( href ).slideDown();
        }    
    });
   
    // Navbar Mobile
    $(".header__nav#mobile-nav").on("click", function(e){
        $(".header .nav.nav_mobile").slideToggle();
    });
    $(".header .nav.nav_mobile .nav__title").on("click", function(e){
        let href = $(this).data("href");

        if( $( this ).hasClass("nav__title--active") ){
            $( this ).removeClass("nav__title--active");
            $( href ).removeClass("nav__hidden--active");
            $( href ).slideUp();
        }else{
            // remove active    
            let hrefActive = $(".header .nav.nav_mobile .nav__title.nav__title--active").data("href");
            $( hrefActive ).removeClass("nav__hidden--active");
            $( hrefActive ).slideUp();
            $(".header .nav.nav_mobile .nav__title.nav__title--active").removeClass("nav__title--active");
            // add active status
            $( this ).addClass("nav__title--active");
            $( href ).addClass("nav__hidden--active");
            $( href ).slideDown();
        }    
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		let dropdownActive = $(".nav__dropdown.nav__dropdown--active"); // элемент
        let mobileActive = $(".header .nav.nav_mobile");
        
		if (!dropdownActive.is(e.target) // клик был не по блоку
            && dropdownActive.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".nav__item_has-child .nav__link.nav__link--active").removeClass("nav__link--active");
                dropdownActive.removeClass("nav__dropdown--active");
                dropdownActive.slideUp();
        }
        
        if (!mobileActive.is(e.target) && mobileActive.has(e.target).length === 0 && !$(".header__nav#mobile-nav").is(e.target)) {
            mobileActive.slideUp();
		}
    });

    $(".navigation-block .navigation-block__scroll").on("click", function(){
        $(".navigation-block .nav").animate({scrollLeft: "+=" + 150 + "px"})
    });
});