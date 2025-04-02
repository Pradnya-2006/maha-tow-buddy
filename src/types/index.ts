// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// Vehicle types
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export interface TowService {
  id: string;
  vehicleId: string;
  userId: string;
  location: {
    pickup: string;
    dropoff: string;
  };
  status: 'pending' | 'accepted' | 'inProgress' | 'completed' | 'cancelled';
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
