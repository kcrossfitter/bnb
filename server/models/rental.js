const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [128, 'Too long, maximum 128 characters'],
    minlength: [2, 'Too short, minimum 2 characters']
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    lowercase: true,
    minlength: [4, 'Too short, minimum is 4 characters']
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  image: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number
  },
  shared: {
    type: Boolean
  },
  description: {
    type: String,
    required: true
  },
  dailyRate: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Rental', rentalSchema)
