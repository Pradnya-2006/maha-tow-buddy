
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, Save, ImagePlus, Car } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const AdminAddDetails = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Vehicle Details
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
  
  // Towing Details
  const [towingDate, setTowingDate] = useState("");
  const [towingTime, setTowingTime] = useState("");
  const [towingLocation, setTowingLocation] = useState("");
  const [towingReason, setTowingReason] = useState("");
  const [fine, setFine] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [hasPaid, setHasPaid] = useState(false);
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Vehicle details added successfully!");
      setIsSubmitting(false);
      
      // Reset form or navigate
      navigate("/admin/dashboard");
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-10">
        <div className="gov-container">
          <div className="flex items-center mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-amber-500/20" 
              onClick={() => navigate("/admin/dashboard")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Add New Vehicle Details</h1>
          <p className="text-lg mt-2 opacity-90">Create a new towing record in the system</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700">
              <Car className="mr-2 h-5 w-5" />
              New Towing Record
            </CardTitle>
            <CardDescription>
              Enter details about the towed vehicle and the towing event
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Tabs defaultValue="vehicle" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
                  <TabsTrigger value="towing">Towing Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="vehicle" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleNumber">Vehicle Number <span className="text-red-500">*</span></Label>
                      <Input 
                        id="vehicleNumber" 
                        placeholder="MH01AB1234" 
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type <span className="text-red-500">*</span></Label>
                      <Input 
                        id="vehicleType" 
                        placeholder="Car, Bike, etc." 
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Owner Name</Label>
                      <Input 
                        id="ownerName" 
                        placeholder="Full name of the owner" 
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ownerContact">Owner Contact</Label>
                      <Input 
                        id="ownerContact" 
                        placeholder="Phone number" 
                        value={ownerContact}
                        onChange={(e) => setOwnerContact(e.target.value)}
                      />
                    </div>
                    
                    <div className="col-span-2 border border-dashed rounded-md p-6 text-center">
                      <ImagePlus className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">Upload vehicle images</p>
                      <Button type="button" variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="towing" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="towingDate">Towing Date <span className="text-red-500">*</span></Label>
                      <Input 
                        id="towingDate" 
                        type="date" 
                        value={towingDate}
                        onChange={(e) => setTowingDate(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="towingTime">Towing Time <span className="text-red-500">*</span></Label>
                      <Input 
                        id="towingTime" 
                        type="time" 
                        value={towingTime}
                        onChange={(e) => setTowingTime(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="towingLocation">Towing Location <span className="text-red-500">*</span></Label>
                      <Input 
                        id="towingLocation" 
                        placeholder="Address where vehicle was towed from" 
                        value={towingLocation}
                        onChange={(e) => setTowingLocation(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="towingReason">Reason for Towing <span className="text-red-500">*</span></Label>
                      <Input 
                        id="towingReason" 
                        placeholder="e.g., Illegal parking, No-parking zone" 
                        value={towingReason}
                        onChange={(e) => setTowingReason(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fine">Fine Amount (₹) <span className="text-red-500">*</span></Label>
                      <Input 
                        id="fine" 
                        type="number" 
                        placeholder="Amount in rupees" 
                        value={fine}
                        onChange={(e) => setFine(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 flex items-center">
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox 
                          id="hasPaid" 
                          checked={hasPaid}
                          onCheckedChange={(checked) => 
                            setHasPaid(checked as boolean)
                          }
                        />
                        <Label htmlFor="hasPaid" className="font-normal">
                          Fine already paid
                        </Label>
                      </div>
                    </div>
                    
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea 
                        id="additionalNotes" 
                        placeholder="Any additional information about the towing" 
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        rows={4}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/admin/dashboard")}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-amber-600 hover:bg-amber-700"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                      </svg>
                    </span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Record
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminAddDetails;
