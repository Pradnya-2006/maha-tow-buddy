import type { User, ApiResponse } from '@/types';
import { userController } from '@/controllers/user.controller';

class AuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('auth_token');
    }
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
    try {
      // TODO: Implement actual login logic
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        this.setToken(data.token);
      }
      return data;
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  }

  async register(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    return userController.register(userData);
  }

  async logout(): Promise<void> {
    this.clearToken();
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();
