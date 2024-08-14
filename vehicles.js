const express = require('express');
const { v4: uuidv4, validate: isUUID } = require('uuid');
const router = express.Router();
// In-memory storage for vehicles
let vehicles = [];
// Get all vehicles
router.get('/', (req, res) => {
  res.json(vehicles);
});
// Get a specific vehicle by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!isUUID(id)) {
    return res.status(400).json({ error: 'Invalid vehicle id' });
  }
  const vehicle = vehicles.find((v) => v.id === id);
  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }
  res.json(vehicle);
});
// Create a new vehicle
router.post('/', (req, res) => {
  const { name, brand, year } = req.body;
  // Validate input data
  if (!name || !brand || !year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Convert year to integer
  const parsedYear = parseInt(year, 10);
  if (isNaN(parsedYear)) {
    return res.status(400).json({ error: 'Invalid year' });
  }
  const id = uuidv4();
  const vehicle = { id, name, brand, year: parsedYear };
  vehicles.push(vehicle);
  res.status(201).json(vehicle);
});
// Update an existing vehicle
router.put('/:id', (req, res) => {
  const { id } = req.params;
  if (!isUUID(id)) {
    return res.status(400).json({ error: 'Invalid vehicle id' });
  }
  const { name, brand, year } = req.body;
  // Validate input data
  if (!name || !brand || !year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Convert year to integer
  const parsedYear = parseInt(year, 10);
  if (isNaN(parsedYear)) {
    return res.status(400).json({ error: 'Invalid year' });
  }
  const vehicle = vehicles.find((v) => v.id === id);
  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }
  vehicle.name = name;
  vehicle.brand = brand;
  vehicle.year = parsedYear;
  res.json(vehicle);
});
// Delete a vehicle
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (!isUUID(id)) {
    return res.status(400).json({ error: 'Invalid vehicle id' });
  }
  const index = vehicles.findIndex((v) => v.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Vehicle not found' });
  } else {
    const deletedVehicle = vehicles.splice(index, 1)[0];
    res.json(deletedVehicle);
  }
});
module.exports = router;