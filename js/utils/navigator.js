function goToHomePage() {
  window.location.hash = '';
  document.querySelector('#mainContent').innerHTML = homePage;
}
function goToAboutPage() {
  window.location.hash = 'about';
  document.querySelector('#mainContent').innerHTML = aboutPage;
}

function goToLocationPage() {
  window.location.hash = 'location';
  document.querySelector('#mainContent').innerHTML = locationPage;
  var myCenter = new google.maps.LatLng(25.163549, 121.451950);
  var mapProp = {
    center: myCenter,
    zoom: 19,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: myCenter
  });
  marker.setMap(map);
}

function goToReservePage() {
  window.location.hash = 'reserve';
  document.querySelector('#mainContent').innerHTML = reservePage;
}

function navigate() {
  if (!window.location.hash) {
    goToHomePage();
  }
  switch (window.location.hash) {
    case '#about':
      goToAboutPage();
      break;
    case '#location':
      goToLocationPage();
      break;
    case '#reserve':
      goToReservePage();
      break;
  }
}
(function (global) {
  navigate();
  global.onhashchange = function () {
    navigate();
  }
})(window);