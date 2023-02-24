const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  fisrtName: {
    type: String,
    required: 'You need to leave a first name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  lastName: {
    type: String,
    required: 'You need to leave a last name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
