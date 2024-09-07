import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

// banner
const bannerLeft = $('#bannerLeft');
const bannerRight = $('#bannerRight');
const bannerWrapper = $('#bannerWrapper .banner-slide');
const slide1 = $('#Slide1');
let bannerNum = 1;

bannerLeft.click(function(){
  bannerNum -=1;
  if(bannerNum < 0 )
    {
      bannerNum =0;
      bannerWrapper.animate({left: '+=0'}, 500); 
    }else{
      bannerWrapper.animate({left: '+=1350px'}, 500); 

    }
  console.log(bannerNum);
})

bannerRight.click(function(){
  bannerNum +=1;
  if(bannerNum >2 )
    {
      bannerNum = 2;
      bannerWrapper.animate({left: '-=0px'}, 500); 
    }else{
      bannerWrapper.animate({left: '-=1350px'}, 500); 

    }

  console.log(bannerNum);

})



// popular-desktop-carousel
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// popular-mobile-carousel
  var swiper2 = new Swiper(".mySwiper2", {});

  
// course-mobile-carousel
var swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const billMobileBtn = $('#billMobileBtn');
const infoHidden = $('#infoHidden');
const billCloseBtn = $('#billCloseBtn');



billMobileBtn.click(function(){
  infoHidden.slideToggle(500);

})
billCloseBtn.click(function(){
  infoHidden.slideUp();
})







