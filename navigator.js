function goToAboutPage() {
  window.location.hash = 'about';
  document.querySelector('#mainContent').innerHTML = aboutPage;
}

function goToLocationPage() {
  window.location.hash = 'location';
  document.querySelector('#mainContent').innerHTML = locationPage;
}
function navigate() {
  if (!window.location.hash) {
    document.querySelector('#mainContent').innerHTML = 'Top Page';
  }
  switch (window.location.hash) {
    case '#about':
      document.querySelector('#mainContent').innerHTML = aboutPage;
      break;
    case '#location':
      document.querySelector('#mainContent').innerHTML = locationPage;
      break;
  }
}
(function (global) {
  navigate();
  global.onhashchange = function () {
    navigate();
  }
})(window);