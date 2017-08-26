function goToHomePage() {
  changeSelectedState('home');
  window.location.hash = '';
  document.querySelector('#mainContent').innerHTML = homePage;
}
function goToAboutPage() {
  changeSelectedState('about');
  window.location.hash = 'about';
  document.querySelector('#mainContent').innerHTML = aboutPage;
}

function goToLocationPage() {
  changeSelectedState('location');
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

function setUpCaptcha() {
  var a = Math.ceil(Math.random() * 9) + '';
  var b = Math.ceil(Math.random() * 9) + '';
  var c = Math.ceil(Math.random() * 9) + '';
  var d = Math.ceil(Math.random() * 9) + '';
  var e = Math.ceil(Math.random() * 9) + '';
  var code = a + b + c + d + e;
  document.getElementById('captchaValue').value = code;
  document.getElementById('captcha').innerHTML = code;
}

function goToReservePage() {
  changeSelectedState('reserve');
  window.location.hash = 'reserve';
  document.querySelector('#mainContent').innerHTML = reservePage;
  setUpCaptcha();
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
    const isCaptchaValid = document.getElementById('captchaInput').value === document.getElementById('captchaValue').value;
    if (!isFormValid) {
      alert('請再次確認表格資訊無誤！');
    } else if(!isCaptchaValid) {
      alert('驗證碼輸入錯誤！');
      document.getElementById('captchaInput').value = '';
    } else {
      sendReservation();
    }
  });
}

function goToServicePage() {
  changeSelectedState('service');
  window.location.hash = 'service';
  document.querySelector('#mainContent').innerHTML = servicePage;
  document.querySelector('#serviceContent').innerHTML = medicalSection;
}

function switchSection(event, sectionName) {
  event.preventDefault();
  $('.item_list').each(function() {
    if ($(this)[0].id === sectionName) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  });
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

function goToFeaturePage() {
  changeSelectedState('feature');
  window.location.hash = 'feature';
  document.querySelector('#mainContent').innerHTML = featurePage;
}

function changeSelectedState(id) {
  $('.header_link').each(function() {
    if($(this)[0].id === id) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  });
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
    case '#feature':
      goToFeaturePage();
      break;
  }
}
(function (global) {
  navigate();
  global.onhashchange = function () {
    navigate();
  }
})(window);