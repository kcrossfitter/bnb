const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const Rental = require('./models/rental')
const FakeDB = require('./fake-db')
const rentalRoutes = require('./routes/rentals')

const app = express()

mongoose
  .connect(
    config.DB_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('MongoDB connected')
    const fakeDb = new FakeDB()
    fakeDb.seedDb()
  })
  .catch(err => {
    console.error('Fail to connect to MongoDB:', err)
    return
  })

app.use('/api/v1/rentals', rentalRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Server started...')
})
