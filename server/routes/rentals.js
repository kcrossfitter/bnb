const express = require('express')
const router = express.Router()
const Rental = require('../models/rental')

router.get('/', async (req, res) => {
  try {
    const foundRentals = await Rental.find({})
    res.json(foundRentals)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const foundRental = await Rental.findById(req.params.id)
    if (!foundRental) {
      return res
        .status(404)
        .json({ error: [{ title: 'Rental error', detail: 'No such rental!' }] })
    }
    res.json(foundRental)
  } catch (error) {
    res
      .status(400)
      .json({
        error: [{ title: 'Rental error', detail: 'Fail to retrieve entry' }]
      })
  }
})
module.exports = router
