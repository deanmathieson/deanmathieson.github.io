const duration = 0.3;
const initDuration = 1.2;

var tl = gsap.timeline({});

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  mousewheel: true,
  initialSlide: 0,
  on: {
    init: function () {
      gsap.from(".swiper-slide-active", {
        opacity: 0,
        duration: 1.5,
      });
      gsap.to(".swiper-slide-active", {
        duration: 1.2,
        scale: 1,
      });
      gsap.from(".menu", {
        delay: 2,
        duration: initDuration,
        opacity: 0,
        x: -100,
      });
      gsap.from(".logo", {
        delay: 1.6,
        duration: initDuration,
        opacity: 0,
        x: -100,
      });
      gsap.from(".media ul li", {
        delay: 2,
        duration: initDuration,
        opacity: 0,
        stagger: 0.4,
        x: -100,
      });
      gsap.from(".slide-img", {
        delay: 2.4,
        duration: initDuration,
        opacity: 0,
        x: -100,
        stagger: 0.4,
      });
      gsap.from(".slide-text", {
        delay: 3,
        duration: initDuration,
        opacity: 0,
        x: -100,
        stagger: 0.4,
      });
      gsap.from(".scroll", {
        delay: 3,
        duration: initDuration,
        opacity: 0,
        x: -100,
      });
    },
  },
});

slider.on("transitionStart", function () {
  gsap.to(".swiper-slide-active", {
    duration: duration,
    scale: 1,
  });

  gsap.to(".swiper-slide-prev", {
    duration: duration,
    scale: 0.5,
  });
  gsap.to(".swiper-slide-next", {
    duration: duration,
    scale: 0.5,
  });
});

$(".menu").click(function () {
  gsap.to(".offCanvas", {
    duration: 1.3,
    width: "200px",
  });
  gsap.to(".menu", {
    opacity: 0,
  });
});

$(".closeButton").click(function () {
  gsap.to(".offCanvas", {
    duration: 1.3,
    width: "0px",
  });
  gsap.to(".menu", {
    opacity: 1,
  });
});
