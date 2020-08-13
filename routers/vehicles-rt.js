const express = require('express')
const router = express.Router()
const vehicleController = require('./../controllers/vehicles-ctr')


router.post('/vehicles', vehicleController.createVehicle)
router.get('/vehicles', vehicleController.retrieveAllVehicles)
router.get('/vehicles/:id', vehicleController.retrieveOneVehicle)
router.put('/vehicles/:id', vehicleController.updateVehicle)
router.delete('/vehicles/:id', vehicleController.deleteVehicle)

module.exports = router