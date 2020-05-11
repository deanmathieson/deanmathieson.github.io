$(document).ready(function() {
    TweenMax.to(".overlay h1", 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    TweenMax.to(".overlay span", 2, {
        opacity: 0.3,
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    TweenMax.to(".overlay", 2, {
        delay: 1,
        top: "-100%",
        ease: Expo.easeInOut
    });
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        delay: 1.5,
    })
    timeline.to(".subTitle", 3.5, {text: "Creative design expert"});
    TweenMax.from(".subTitle", 1, {
		delay: 2.7,
		opacity: 0,
		x: -100,
		ease: Power3.easeInOut
    });
    
})