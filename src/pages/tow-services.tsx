import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, MapPin, Clock, AlertCircle } from 'lucide-react';

interface TowService {
  id: string;
  status: 'PENDING' | 'ACCEPTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  vehicle: {
    make: string;
    model: string;
    licensePlate: string;
  };
  pickupLoc: string;
  dropoffLoc: string;
  description?: string;
  price?: number;
  createdAt: string;
  completedAt?: string;
}

const mockServices: TowService[] = [
  {
    id: '1',
    status: 'IN_PROGRESS',
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      licensePlate: 'ABC123',
    },
    pickupLoc: '123 Main St, City',
    dropoffLoc: '456 Service Center Ave',
    description: 'Car won\'t start',
    price: 150,
    createdAt: '2025-04-01T18:00:00Z',
  },
  {
    id: '2',
    status: 'COMPLETED',
    vehicle: {
      make: 'Honda',
      model: 'Civic',
      licensePlate: 'XYZ789',
    },
    pickupLoc: '789 Park Rd',
    dropoffLoc: '321 Garage St',
    price: 120,
    createdAt: '2025-04-01T15:30:00Z',
    completedAt: '2025-04-01T17:00:00Z',
  },
];

const TowServices: React.FC = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tow Services</h1>
          <p className="text-muted-foreground">View and manage your towing service requests</p>
        </div>
        <Button>
          <Truck className="mr-2 h-4 w-4" /> Request Tow
        </Button>
      </div>

      <div className="grid gap-6">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {mockServices.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No Service Requests</h2>
          <p className="text-muted-foreground">You haven't made any tow service requests yet</p>
          <Button className="mt-4">
            <Truck className="mr-2 h-4 w-4" /> Request Tow
          </Button>
        </div>
      )}
    </div>
  );
};

interface ServiceCardProps {
  service: TowService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getStatusColor = (status: TowService['status']) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
      case 'ACCEPTED':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      case 'IN_PROGRESS':
        return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
      case 'COMPLETED':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'CANCELLED':
        return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>
              {service.vehicle.make} {service.vehicle.model}
            </CardTitle>
            <CardDescription>
              License Plate: {service.vehicle.licensePlate}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(service.status)}>
            {service.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Pickup Location</p>
              <p className="text-muted-foreground">{service.pickupLoc}</p>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Dropoff Location</p>
              <p className="text-muted-foreground">{service.dropoffLoc}</p>
            </div>
          </div>
          {service.description && (
            <div className="text-sm">
              <p className="font-medium">Description</p>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          )}
          {service.price && (
            <div className="text-sm">
              <p className="font-medium">Price</p>
              <p className="text-muted-foreground">${service.price}</p>
            </div>
          )}
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Created</p>
              <p className="text-muted-foreground">
                {new Date(service.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {service.status === 'PENDING' && (
          <Button variant="destructive" size="sm">Cancel Request</Button>
        )}
        <Button variant="secondary" size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default TowServices;
