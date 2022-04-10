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
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
            
        })

        $('#consultation-form').validate({
          rules: {
            name: "required",
            tel: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "введите ваше имя",
            tel: "введите ваш телефон",
            email: {
              required: "ввведите ваш E-mail",
              email: "неправильный формат"
            }
          }
        });
        $('#modal-form').validate({
          rules: {
            name: "required",
            tel: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "введите ваше имя",
            tel: "введите ваш телефон",
            email: {
              required: "ввведите ваш E-mail",
              email: "неправильный формат"
            }
          }
        });
        $('#order-form').validate({
          rules: {
            name: "required",
            tel: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "введите ваше имя",
            tel: "введите ваш телефон",
            email: {
              required: "ввведите ваш E-mail",
              email: "неправильный формат"
            }
          }
        });
      
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

    $('form').submit(function(e) {
      e.preventDefault();
      if (!$(this).valid()){
        return;
      }
      $.ajax({
        type: "Post",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");


        $("form").trigger('reset');
      });
      return false;
    });
    // $('[data-modal="thanks"]').on('click', function(){
    //     $('#thanks').fadeIn(), $('#consultation, #order,').fadeOut();
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
  document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом data-mask="phone"
    if (!elements) return // если таких нет, прекращаем выполнение функции
    const phoneOptions = { // создаем объект параметров
      mask: '+{38}(000)000-00-00' // задаем единственный параметр mask
    }
    elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
      IMask(el, phoneOptions) // инициализируем плагин с установленными выше параметрами
    })
  
  })
  


