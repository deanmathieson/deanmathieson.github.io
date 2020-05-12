$(document).ready(function () {
  var text = "";

  for (var i = 0; i < 200; i++) {
    text += " NEW. INNOVATION. FRESH. ";
  }

  $("#text").html(text);

  /* Animation*/
  TweenMax.from("#outerBlackRing", 1.2, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#blueRing", 1.6, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#whiteRing", 3, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#purpleRing", 3.4, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#innerBlackRing", 3.8, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#logo", 4.2, {
    opacity: 0,
    ease: Expo.easeIn,
  });
  TweenMax.from("#text", 7, {
    opacity: 0,
    ease: Expo.easeIn,
  });

/*rotation of circles*/
TweenMax.to( "#purpleRing" , 3, { rotation: 360, ease: Linear.easeNone, repeat: -1 } );


});
