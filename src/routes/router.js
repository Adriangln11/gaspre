const router = require('express').Router()

const { getPrices } = require('../controllers/controllers.js')

router.get('/:id', getPrices)

module.exports = router
