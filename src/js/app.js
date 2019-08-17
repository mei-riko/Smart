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

    // Index Slider
    if( $('.slider-block .slider-block__content').length > 0 ){
        $('.slider-block .slider-block__content').slick({
            slidesToShow: 4,
            variableWidth: true
        });
    }
    // Brand Slider
    if( $('.slider-brand').length > 0 ){
        $('.slider-brand').slick({
            slidesToShow: 5,
            centerMode: true,
            variableWidth: true,
            prevArrow: '<svg class="slick-prev slick-prev_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#C5C5C5" d="M28.7,2.2c14.4,0,26,11.6,26,26s-11.6,26-26,26s-26-11.6-26-26S14.3,2.2,28.7,2.2z"/><g><polygon fill="#FFF" points="35.2,15.5 33.3,13.5 18.2,28.2 33.3,42.9 35.2,40.9 22.1,28.2 		"/></g></svg>',
            nextArrow: '<svg class="slick-next slick-next_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#c5c5c5" d="M28.7,54.2c-14.4,0-26-11.6-26-26s11.6-26,26-26s26,11.6,26,26S43.1,54.2,28.7,54.2z"/><g><polygon fill="#FFFFFF" points="22.2,40.9 24.1,42.9 39.2,28.2 24.1,13.5 22.2,15.5 35.3,28.2 		"/></g></svg>'
        });
    }
    // Masonry
    if( $('.post-row').length > 0 ){
        $('.post-row').masonry({
            // указываем класс элемента являющегося блоком в нашей сетке
            itemSelector: '.post-col',
            // true - если у вас все блоки одинаковой ширины
            singleMode: true,
            // перестраивает блоки при изменении размеров окна
            isResizable: true,
            // анимируем перестроение блоков
            isAnimated: true,
            // опции анимации - очередь и продолжительность анимации
            animationOptions: { 
                queue: false, 
                duration: 500 
            }
        });
    }

    // Post Slider
    if( $('.slider-for').length > 0 ){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<svg class="slick-prev slick-prev_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#323232" d="M28.7,2.2c14.4,0,26,11.6,26,26s-11.6,26-26,26s-26-11.6-26-26S14.3,2.2,28.7,2.2z"/><g><polygon fill="#FFF" points="35.2,15.5 33.3,13.5 18.2,28.2 33.3,42.9 35.2,40.9 22.1,28.2 		"/></g></svg>',
            nextArrow: '<svg class="slick-next slick-next_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#323232" d="M28.7,54.2c-14.4,0-26-11.6-26-26s11.6-26,26-26s26,11.6,26,26S43.1,54.2,28.7,54.2z"/><g><polygon fill="#FFFFFF" points="22.2,40.9 24.1,42.9 39.2,28.2 24.1,13.5 22.2,15.5 35.3,28.2 		"/></g></svg>'
        });
    }
});