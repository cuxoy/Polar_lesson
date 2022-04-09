(function($) {
    $(function() {
      //tabs-----------------------------------------
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
        //catalog--------------------------------------------
      $('.catalog-item__link').each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
          
        })
        $('.catalog-item__back').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').toggleClass('catalog-item__list_active');
            })
            
          })
      
    });
    
    //modal---------------------------------------------------------
    $("[data-modal=consultation]").on('click', function(){
        $('.overlay,#consultation').fadeIn();
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    $('.button_catalog-item').on('click', function(){
        $('.overlay, #order').fadeIn();
    });
    
    $('[data-modal="thanks"]').on('click', function(){
        $('#thanks').fadeIn(), $('#consultation, #order,').fadeOut();
    });
    // $('[data-modal="thanks"]').on('click', function(){
    //     $('#consultation, #order,').fadeOut();
    // });
    

})(jQuery);
//slider---------------------------------------------------------------
var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    
  });
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };
  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };


