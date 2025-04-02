import { Vehicle } from '@/types';

class VehicleModel {
  private vehicles: Vehicle[] = [];

  async findById(id: string): Promise<Vehicle | null> {
    return this.vehicles.find(vehicle => vehicle.id === id) || null;
  }

  async findByOwnerId(ownerId: string): Promise<Vehicle[]> {
    return this.vehicles.filter(vehicle => vehicle.ownerId === ownerId);
  }

  async create(vehicleData: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<Vehicle> {
    const newVehicle: Vehicle = {
      id: crypto.randomUUID(),
      ...vehicleData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  async update(id: string, vehicleData: Partial<Vehicle>): Promise<Vehicle | null> {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (index === -1) return null;

    this.vehicles[index] = {
      ...this.vehicles[index],
      ...vehicleData,
      updatedAt: new Date()
    };
    return this.vehicles[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (index === -1) return false;
    
    this.vehicles.splice(index, 1);
    return true;
  }
}

export const vehicleModel = new VehicleModel();
