let vehicles = require('../data/vehicles')
let counter = 21

const createVehicle = (req,res) => {
  vehicles.push({_id: counter++, ...req.body})
  res.json(vehicles[vehicles.length - 1])
}

const retrieveAllVehicles = (req, res) => {
  res.json(vehicles)
}

const retrieveOneVehicle = (req, res) => {
  res.json(vehicles.filter( vehicles => vehicles._id === parseInt(req.params.id)))
}


const updateVehicle = (req, res) => {
  let foundVehicle = (vehicles.filter( vehicles => vehicles._id === parseInt(req.params.id)))
  let vehicle = foundVehicle[0]
  vehicle.imgUrl = req.body.imgUrl ? req.body.imgUrl : vehicle.imgUrl
  vehicle.year = req.body.year ? req.body.year : vehicle.year
  vehicle.make = req.body.make ? req.body.make : vehicle.make
  vehicle.model = req.body.model ? req.body.model : vehicle.model
  vehicle.price = req.body.price ? req.body.price : vehicle.price
  vehicle.km = req.body.km ? req.body.km : vehicle.km
  vehicle.miles = req.body.miles ? req.body.miles : vehicle.miles
  vehicle.fuel = req.body.fuel ? req.body.fuel : vehicle.fuel
  vehicle.city = req.body.city ? req.body.city : vehicle.city
  vehicle.isNew = req.body.isNew ? req.body.isNew : vehicle.isNew
  res.json(foundVehicle)
}

const deleteVehicle = (req, res) => {
  let foundVehicle = (vehicles.filter( vehicles => vehicles._id === parseInt(req.params.id)))
  let vehicle = foundVehicle[0]
  if (vehicle) {
    vehicle.isActive = false
    res.send("It's sleeping with the fishes")
  } else {
    res.status(400).json({ message: `vehicle with id of ${req.params.id} does not exist`})
  }
}

module.exports = {
  createVehicle,
  retrieveAllVehicles,
  retrieveOneVehicle,
  updateVehicle,
  deleteVehicle
}