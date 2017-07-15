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

  function sendReservation() {
    axios.post('/reservations', {
      applicantName: 'cool',
      phoneNum: 'cool',
      applicantGender: 'cool',
      clientGender: 'cool',
      clientAge: 12,
      clientDisease: 'cool',
      clientCurrentPlace: 'cool',
      inquirySubject: 'cool',
      specialTreatment: 'cool'
    }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  document.querySelector('#reserveForm').addEventListener('submit', function (e) {
    const isFormValid = document.querySelector('#submitBtn').className.indexOf('disabled') === -1;
    if (!isFormValid) {
      alert('Validate fail');
    } else {
      sendReservation();
    }
  });
}

function goToServicePage () {
  window.location.hash = 'service';
  document.querySelector('#mainContent').innerHTML = servicePage;
  document.querySelector('#serviceContent').innerHTML = medicalSection;
}

function switchSection(sectionName) {
  switch(sectionName) {
    case 'medical':
      document.querySelector('#serviceContent').innerHTML = medicalSection;
      break;
    case 'nursing':
      document.querySelector('#serviceContent').innerHTML = nursingSection;
      break;
    case 'resource':
      document.querySelector('#serviceContent').innerHTML = resourceSection;
      break;
    default:
      document.querySelector('#serviceContent').innerHTML = medicalSection;
  }
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
    case '#service':
      goToServicePage();
      break;
  }
}
(function (global) {
  navigate();
  global.onhashchange = function () {
    navigate();
  }
})(window);