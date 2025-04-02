import { vehicleModel } from '@/models/vehicle.model';
import type { Vehicle, ApiResponse } from '@/types';

export class VehicleController {
  async getUserVehicles(userId: string): Promise<ApiResponse<Vehicle[]>> {
    try {
      const vehicles = await vehicleModel.findByOwnerId(userId);
      return { success: true, data: vehicles };
    } catch (error) {
      return { success: false, error: 'Failed to fetch user vehicles' };
    }
  }

  async addVehicle(vehicleData: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Vehicle>> {
    try {
      const newVehicle = await vehicleModel.create(vehicleData);
      return { success: true, data: newVehicle };
    } catch (error) {
      return { success: false, error: 'Failed to add vehicle' };
    }
  }

  async updateVehicle(id: string, vehicleData: Partial<Vehicle>): Promise<ApiResponse<Vehicle>> {
    try {
      const updatedVehicle = await vehicleModel.update(id, vehicleData);
      if (!updatedVehicle) {
        return { success: false, error: 'Vehicle not found' };
      }
      return { success: true, data: updatedVehicle };
    } catch (error) {
      return { success: false, error: 'Failed to update vehicle' };
    }
  }

  async deleteVehicle(id: string): Promise<ApiResponse<void>> {
    try {
      const success = await vehicleModel.delete(id);
      if (!success) {
        return { success: false, error: 'Vehicle not found' };
      }
      return { success: true, message: 'Vehicle deleted successfully' };
    } catch (error) {
      return { success: false, error: 'Failed to delete vehicle' };
    }
  }
}

export const vehicleController = new VehicleController();
