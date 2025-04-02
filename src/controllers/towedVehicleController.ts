import { Request, Response } from 'express';
import TowedVehicle from '../models/TowedVehicle';

type RequestHandler = (req: Request, res: Response) => Promise<void>;

export const towedVehicleController = {
  // Add a new towed vehicle
  addTowedVehicle: async (req: Request, res: Response): Promise<void> => {
    try {
      const newTowedVehicle = new TowedVehicle(req.body);
      await newTowedVehicle.save();
      res.status(201).json({
        success: true,
        data: newTowedVehicle,
      });
    } catch (err) {
      const error = err as Error;
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Search vehicle by number
  searchVehicle: async (req: Request, res: Response): Promise<void> => {
    try {
      const { vehicleNumber } = req.params;
      const vehicle = await TowedVehicle.find({ 
        vehicleNumber: vehicleNumber.toUpperCase() 
      }).sort({ towingDate: -1 }); // Most recent first

      if (!vehicle || vehicle.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Vehicle not towed',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: vehicle,
      });
    } catch (err) {
      const error = err as Error;
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Get all towed vehicles (for admin)
  getAllTowedVehicles: async (req: Request, res: Response): Promise<void> => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const vehicles = await TowedVehicle.find()
        .sort({ towingDate: -1 })
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit));

      const total = await TowedVehicle.countDocuments();

      res.status(200).json({
        success: true,
        data: vehicles,
        total,
        pages: Math.ceil(total / Number(limit)),
        currentPage: Number(page),
      });
    } catch (err) {
      const error = err as Error;
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Update towed vehicle status
  updateVehicleStatus: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const vehicle = await TowedVehicle.findByIdAndUpdate(
        id,
        { status, updatedAt: new Date() },
        { new: true }
      );

      if (!vehicle) {
        res.status(404).json({
          success: false,
          message: 'Vehicle not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: vehicle,
      });
    } catch (err) {
      const error = err as Error;
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },
};
