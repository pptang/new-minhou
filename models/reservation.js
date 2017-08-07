const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  applicantName: String,
  phoneNum: String,
  applicantGender: String,
  clientGender: String,
  clientAge: Number,
  clientDisease: String,
  clientCurrentPlace: String,
  inquirySubject: [String],
  specialTreatment: [String],
  note: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);