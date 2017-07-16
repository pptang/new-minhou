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

// Pass the checkbox name to the function
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }

  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function goToReservePage() {
  window.location.hash = 'reserve';
  document.querySelector('#mainContent').innerHTML = reservePage;

  function sendReservation() {

    axios({
      method: 'POST',
      url: '/reservations',
      data: {
        applicantName: document.querySelector('#applicantName').value,
        phoneNum: document.querySelector('#phoneNum').value,
        clientGender: document.querySelector('input[name="clientGender"]').value,
        clientAge: document.querySelector('#clientAge').value,
        clientDisease: document.querySelector('#clientDisease').value,
        clientCurrentPlace: document.querySelector('#clientCurrentPlace').value,
        inquirySubject: getCheckedBoxes('inquirySubject'),
        specialTreatment: getCheckedBoxes('specialTreatment'),
        note: document.querySelector('#note').value
      }
    }).then(function (response) {
      alert('申請表單已送出！將有專人主動聯絡您');
      document.getElementById("reserveForm").reset();
      console.log(response);
    }).catch(function (error) {
      alert('伺服器忙碌中，請您稍後再試！');
      console.log(error);
    });
  }

  document.querySelector('#reserveForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const isFormValid = document.querySelector('#submitBtn').className.indexOf('disabled') === -1;
    if (!isFormValid) {
      alert('請再次確認表格資訊無誤！');
    } else {
      sendReservation();
    }
  });
}

function goToServicePage() {
  window.location.hash = 'service';
  document.querySelector('#mainContent').innerHTML = servicePage;
  document.querySelector('#serviceContent').innerHTML = medicalSection;
}

function switchSection(sectionName) {
  switch (sectionName) {
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