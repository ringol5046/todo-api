var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  }
});

module.exports = {User};