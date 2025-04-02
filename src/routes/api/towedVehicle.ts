import express, { Router } from 'express';
import { towedVehicleController } from '../../controllers/towedVehicleController';

const router: Router = express.Router();

// Add a new towed vehicle (Admin only)
router.post('/add', towedVehicleController.addTowedVehicle);

// Search vehicle by number (Public)
router.get('/search/:vehicleNumber', towedVehicleController.searchVehicle);

// Get all towed vehicles (Admin only)
router.get('/all', towedVehicleController.getAllTowedVehicles);

// Update vehicle status (Admin only)
router.patch('/update/:id', towedVehicleController.updateVehicleStatus);

export default router;
