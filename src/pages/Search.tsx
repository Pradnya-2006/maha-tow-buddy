import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Search as SearchIcon } from 'lucide-react';
import { format } from 'date-fns';

interface SearchForm {
  vehicleNumber: string;
}

interface TowedVehicle {
  vehicleNumber: string;
  vehicleModel: string;
  rtoName: string;
  rtoLocation: string;
  location: {
    latitude: number;
    longitude: number;
  };
  officerName: string;
  reason: string;
  towingTime: string;
  towingDate: string;
  fine: number;
  ownerDetails: {
    name: string;
    phoneNumber: string;
  };
  status: string;
}

const Search = () => {
  const { register, handleSubmit } = useForm<SearchForm>();
  const [searchResult, setSearchResult] = useState<TowedVehicle[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SearchForm) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/towed-vehicle/search/${data.vehicleNumber}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to search vehicle');
      }

      setSearchResult(result.data);
    } catch (error) {
      setError(error.message);
      setSearchResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Vehicle Search</h1>
          <p className="text-lg mt-2 opacity-90">Check if your vehicle has been towed</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Search Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
              <Input
                {...register('vehicleNumber', { required: true })}
                placeholder="Enter vehicle number (e.g., MH12AB1234)"
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {error && (
          <div className="max-w-2xl mx-auto">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-600">{error}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {searchResult && searchResult.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold mb-4">Towing Records Found</h2>
            {searchResult.map((vehicle, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Vehicle Details</h3>
                      <dl className="space-y-2">
                        <div>
                          <dt className="text-sm text-gray-500">Vehicle Number</dt>
                          <dd className="font-medium">{vehicle.vehicleNumber}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Vehicle Model</dt>
                          <dd>{vehicle.vehicleModel}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Owner Name</dt>
                          <dd>{vehicle.ownerDetails.name}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Contact Number</dt>
                          <dd>{vehicle.ownerDetails.phoneNumber}</dd>
                        </div>
                      </dl>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">Towing Details</h3>
                      <dl className="space-y-2">
                        <div>
                          <dt className="text-sm text-gray-500">Towing Date & Time</dt>
                          <dd>{format(new Date(vehicle.towingDate), 'PPP p')}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Location</dt>
                          <dd>{vehicle.rtoLocation}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Reason</dt>
                          <dd>{vehicle.reason}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Fine Amount</dt>
                          <dd className="font-medium">₹{vehicle.fine}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Status</dt>
                          <dd>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              vehicle.status === 'released' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {searchResult && searchResult.length === 0 && (
          <div className="max-w-2xl mx-auto">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <p className="text-green-600">Good news! This vehicle has not been towed.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
