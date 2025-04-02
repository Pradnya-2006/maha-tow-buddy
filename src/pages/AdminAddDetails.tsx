import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface TowedVehicleForm {
  vehicleNumber: string;
  vehicleModel: string;
  rtoName: string;
  rtoLocation: string;
  latitude: number;
  longitude: number;
  officerName: string;
  reason: string;
  towingDate: string;
  fine: number;
  ownerName: string;
  ownerPhone: string;
}

const AdminAddDetails = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TowedVehicleForm>();

  const onSubmit = async (data: TowedVehicleForm) => {
    try {
      const response = await fetch('/api/towed-vehicle/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicleNumber: data.vehicleNumber,
          vehicleModel: data.vehicleModel,
          rtoName: data.rtoName,
          rtoLocation: data.rtoLocation,
          location: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
          officerName: data.officerName,
          reason: data.reason,
          towingDate: new Date(data.towingDate),
          fine: data.fine,
          ownerDetails: {
            name: data.ownerName,
            phoneNumber: data.ownerPhone,
          },
        }),
      });

      if (response.ok) {
        toast.success('Vehicle details added successfully');
        reset(); // Reset form
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to add vehicle details');
      }
    } catch (error) {
      toast.error('Failed to add vehicle details');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Add Towed Vehicle Details</h1>
          <p className="text-lg mt-2 opacity-90">Enter details of the towed vehicle</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Vehicle Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vehicle Number</label>
                  <Input
                    {...register('vehicleNumber', { required: true })}
                    placeholder="MH12AB1234"
                    className={errors.vehicleNumber ? 'border-red-500' : ''}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vehicle Model</label>
                  <Input
                    {...register('vehicleModel', { required: true })}
                    placeholder="Vehicle Model"
                  />
                </div>
              </div>

              {/* RTO Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">RTO Name</label>
                  <Input
                    {...register('rtoName', { required: true })}
                    placeholder="RTO Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">RTO Location</label>
                  <Input
                    {...register('rtoLocation', { required: true })}
                    placeholder="RTO Location"
                  />
                </div>
              </div>

              {/* Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Latitude</label>
                  <Input
                    type="number"
                    step="any"
                    {...register('latitude', { required: true })}
                    placeholder="Latitude"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Longitude</label>
                  <Input
                    type="number"
                    step="any"
                    {...register('longitude', { required: true })}
                    placeholder="Longitude"
                  />
                </div>
              </div>

              {/* Officer Details */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Officer Name</label>
                <Input
                  {...register('officerName', { required: true })}
                  placeholder="Officer Name"
                />
              </div>

              {/* Towing Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Towing Date & Time</label>
                  <Input
                    type="datetime-local"
                    {...register('towingDate', { required: true })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fine Amount (₹)</label>
                  <Input
                    type="number"
                    {...register('fine', { required: true, min: 0 })}
                    placeholder="Fine Amount"
                  />
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Reason for Towing</label>
                <Textarea
                  {...register('reason', { required: true })}
                  placeholder="Enter reason for towing"
                  rows={3}
                />
              </div>

              {/* Owner Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Owner Name</label>
                  <Input
                    {...register('ownerName', { required: true })}
                    placeholder="Owner Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Owner Phone Number</label>
                  <Input
                    {...register('ownerPhone', { required: true })}
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Add Vehicle Details
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminAddDetails;
