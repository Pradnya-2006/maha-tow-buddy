import type { TowService, ApiResponse } from '@/types';

export class TowController {
  private towServices: TowService[] = [];

  async requestTowService(serviceData: Omit<TowService, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<TowService>> {
    try {
      const newService: TowService = {
        id: crypto.randomUUID(),
        ...serviceData,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.towServices.push(newService);
      return { success: true, data: newService };
    } catch (error) {
      return { success: false, error: 'Failed to request tow service' };
    }
  }

  async getUserTowServices(userId: string): Promise<ApiResponse<TowService[]>> {
    try {
      const services = this.towServices.filter(service => service.userId === userId);
      return { success: true, data: services };
    } catch (error) {
      return { success: false, error: 'Failed to fetch tow services' };
    }
  }

  async updateTowServiceStatus(id: string, status: TowService['status']): Promise<ApiResponse<TowService>> {
    try {
      const serviceIndex = this.towServices.findIndex(service => service.id === id);
      if (serviceIndex === -1) {
        return { success: false, error: 'Tow service not found' };
      }

      this.towServices[serviceIndex] = {
        ...this.towServices[serviceIndex],
        status,
        updatedAt: new Date()
      };

      return { success: true, data: this.towServices[serviceIndex] };
    } catch (error) {
      return { success: false, error: 'Failed to update tow service status' };
    }
  }

  async cancelTowService(id: string): Promise<ApiResponse<void>> {
    try {
      const result = await this.updateTowServiceStatus(id, 'cancelled');
      if (!result.success) {
        return result;
      }
      return { success: true, message: 'Tow service cancelled successfully' };
    } catch (error) {
      return { success: false, error: 'Failed to cancel tow service' };
    }
  }
}

export const towController = new TowController();
