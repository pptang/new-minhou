const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Reservation = require('./models/reservation');


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/new_minhou');

app.use(express.static(__dirname));
app.use(bodyParser.json({limit: '5mb'}));
app.get('/reservations', (req, res) => {
  Reservation.find(function(err, reservations) {
    if (err) {
      res.send(err)
    }
    res.json(reservations);
  });
});
app.post('/reservations', (req, res) => {
  var reservation = new Reservation();
  console.log('bible:::::', req);
  reservation.applicantName = req.body.applicantName;
  reservation.phoneNum = req.body.phoneNum;
  reservation.applicantGender = req.body.applicantGender;
  reservation.clientGender = req.body.clientGender;
  reservation.clientAge = req.body.clientAge;
  reservation.clientDisease = req.body.clientDisease;
  reservation.clientCurrentPlace = req.body.clientCurrentPlace;
  reservation.inquirySubject = req.body.inquirySubject;
  reservation.specialTreatment = req.body.specialTreatment;

  reservation.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully save reservation!' });
  });
});
app.use('/', (req, res) => {
  res.json('hello world');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});