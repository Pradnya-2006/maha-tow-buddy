import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Car, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    licensePlate: 'ABC123',
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    licensePlate: 'XYZ789',
  },
];

const Vehicles: React.FC = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Vehicles</h1>
          <p className="text-muted-foreground">Manage your registered vehicles</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      {mockVehicles.length === 0 && (
        <div className="text-center py-12">
          <Car className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No Vehicles Added</h2>
          <p className="text-muted-foreground">Add your first vehicle to get started</p>
          <Button className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Vehicle
          </Button>
        </div>
      )}
    </div>
  );
};

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => (
  <Card>
    <CardHeader>
      <CardTitle>{vehicle.make} {vehicle.model}</CardTitle>
      <CardDescription>Year: {vehicle.year}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-muted-foreground">
        <p>License Plate: {vehicle.licensePlate}</p>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="sm">
        <Edit className="mr-2 h-4 w-4" /> Edit
      </Button>
      <Button variant="destructive" size="sm">
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
    </CardFooter>
  </Card>
);

export default Vehicles;
