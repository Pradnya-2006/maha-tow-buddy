export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000,
  },
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
  },
  app: {
    name: 'Maha Tow Buddy',
    version: '1.0.0',
    description: 'A modern towing service management application',
  },
  maps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    defaultCenter: {
      lat: 20.5937,
      lng: 78.9629, // Center of India
    },
    defaultZoom: 5,
  },
} as const;

// Environment-specific configuration
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Type exports
export type Config = typeof config;
