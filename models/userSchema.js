const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim : true,
  },
  email : {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: '{VALUE} is not a valid email address!'
    }
  },
  password : {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
  },
});

const User = mongoose.model('User',userSchema);

module.exports = User;
