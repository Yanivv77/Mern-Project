const { timeStamp } = require('console')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please add a name'],
    },
    email: {
      type: String,
      require: [true, 'Please add a email'],
      unique: [true, 'This email already in use'],
    },
    password: {
      type: String,
      require: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
