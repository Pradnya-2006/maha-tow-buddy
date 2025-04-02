import { userModel } from '@/models/user.model';
import type { User, ApiResponse } from '@/types';

export class UserController {
  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      // TODO: Get user from auth context
      const user = await userModel.findById('current-user-id');
      if (!user) {
        return { success: false, error: 'User not found' };
      }
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: 'Failed to get current user' };
    }
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    try {
      // TODO: Get user ID from auth context
      const updatedUser = await userModel.update('current-user-id', userData);
      if (!updatedUser) {
        return { success: false, error: 'Failed to update profile' };
      }
      return { success: true, data: updatedUser };
    } catch (error) {
      return { success: false, error: 'Failed to update profile' };
    }
  }

  async register(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    try {
      const existingUser = await userModel.findByEmail(userData.email);
      if (existingUser) {
        return { success: false, error: 'Email already registered' };
      }

      const newUser = await userModel.create(userData);
      return { success: true, data: newUser };
    } catch (error) {
      return { success: false, error: 'Failed to register user' };
    }
  }
}

export const userController = new UserController();
