import mongoose from 'mongoose';

const towedVehicleSchema = new mongoose.Schema({
  // Vehicle Details
  vehicleNumber: {
    type: String,
    required: true,
    uppercase: true,
    index: true, // For faster searches
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  
  // RTO Information
  rtoName: {
    type: String,
    required: true,
  },
  rtoLocation: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  
  // Officer Details
  officerName: {
    type: String,
    required: true,
  },
  
  // Towing Details
  reason: {
    type: String,
    required: true,
  },
  towingDate: {
    type: Date,
    required: true,
  },
  fine: {
    type: Number,
    required: true,
    min: 0,
  },
  
  // Vehicle Owner Details
  ownerDetails: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  
  // Status
  status: {
    type: String,
    enum: ['towed', 'released', 'pending'],
    default: 'towed',
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add text index for search functionality
towedVehicleSchema.index({ vehicleNumber: 'text' });

const TowedVehicle = mongoose.model('TowedVehicle', towedVehicleSchema);

export default TowedVehicle;
