function load_google_reviews(place) {

  document.write('<div id="cws_google_reviews"></div>');

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        document.getElementById("cws_google_reviews").innerHTML = xmlhttp.responseText;
      }
      else if (xmlhttp.status == 400) {
        document.getElementById("cws_google_reviews").innerHTML('<p>There was an error processing your reviews.<br /><small>[code: 400]</small></p>');
      }
      else {
        document.getElementById("cws_google_reviews").innerHTML('<p>Unknown error occured.<br /><small>[code: 600]</small></p>');
      }
    }
  };

  xmlhttp.open("POST", "https://googlereviews.cws.net/display-reviews.php" , true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("place=" + place);
}