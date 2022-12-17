const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  eventId: {
    type: String,
    default: null,
  },
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
    default: null,
  },
  scholarId: {
    type: Number,
    unique: true,
    maxlength: 7,
    minlength: 7,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  payment: {
    public_id: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
  },
});



module.exports = mongoose.model("Student", studentSchema);