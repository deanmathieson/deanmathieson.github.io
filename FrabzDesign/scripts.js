$(document).ready(function () {
  var text = "";

  for (var i = 0; i < 200; i++) {
    text += " NEW. INNOVATION. FRESH. ";
  }

  $("#text").html(text);

  /* Animation*/
  TweenMax.to("#logo", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
}); 
});
