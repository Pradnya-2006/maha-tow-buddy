
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Search, Loader2 } from "lucide-react";

const VehicleSearchForm = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleRegNumberSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      toast.error("Please enter a valid vehicle registration number");
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      toast.info("No towed vehicle found with this registration number");
    }, 1500);
  };

  const handleChassisSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chassisNumber.trim()) {
      toast.error("Please enter a valid chassis number");
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      toast.info("No towed vehicle found with this chassis number");
    }, 1500);
  };

  const handleOwnerSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName.trim() || !mobileNumber.trim()) {
      toast.error("Please enter both owner name and mobile number");
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      toast.info("No towed vehicle found with these owner details");
    }, 1500);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Search for Your Towed Vehicle</CardTitle>
        <CardDescription className="text-center">
          Enter your vehicle details to check if it has been towed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="registration">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="registration">By Registration</TabsTrigger>
            <TabsTrigger value="chassis">By Chassis Number</TabsTrigger>
            <TabsTrigger value="owner">By Owner Details</TabsTrigger>
          </TabsList>

          <TabsContent value="registration">
            <form onSubmit={handleRegNumberSearch} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="vehicleNumber">Vehicle Registration Number</Label>
                <Input
                  id="vehicleNumber"
                  placeholder="E.g., MH01AB1234"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="uppercase"
                />
              </div>
              <Button type="submit" disabled={isSearching} className="w-full">
                {isSearching ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                {isSearching ? "Searching..." : "Search Vehicle"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="chassis">
            <form onSubmit={handleChassisSearch} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="chassisNumber">Chassis Number</Label>
                <Input
                  id="chassisNumber"
                  placeholder="Enter your vehicle's chassis number"
                  value={chassisNumber}
                  onChange={(e) => setChassisNumber(e.target.value)}
                  className="uppercase"
                />
              </div>
              <Button type="submit" disabled={isSearching} className="w-full">
                {isSearching ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                {isSearching ? "Searching..." : "Search Vehicle"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="owner">
            <form onSubmit={handleOwnerSearch} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner's Full Name</Label>
                <Input
                  id="ownerName"
                  placeholder="Enter the registered owner's name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  placeholder="Enter registered mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="tel"
                />
              </div>
              <Button type="submit" disabled={isSearching} className="w-full">
                {isSearching ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                {isSearching ? "Searching..." : "Search Vehicle"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-gray-500">
        <p>
          For immediate assistance, call our helpline at{" "}
          <a href="tel:1800-123-4567" className="text-gov-blue hover:underline">
            1800-123-4567
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default VehicleSearchForm;
