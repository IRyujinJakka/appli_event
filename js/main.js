
// initialization of slider 
const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
        delay: 5000,
      }
  });

// initialization of counter 
$('.timer').countTo();