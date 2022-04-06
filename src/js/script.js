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