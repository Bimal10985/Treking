


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      // when window width is >= 320px
  
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      920:{
        slidesPerView: 3,
      },
      1120:{
        slidesPerView: 3,
      },
    },
  });
  
  
  var swiper = new Swiper(".mySwipers", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
    // var swiper = new Swiper(".mySwiper", {
    //       navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //     });
  
    // Couter
  
  
    $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
    
    // $(document).ready(function(){
    //   $('.count').counterUp({
    //     delay: 10,
    //     time: 2000 
    //   });
    // });