
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Loader2, Search, FileText, Download } from "lucide-react";

// Mock payment data for demonstration
const mockPayments = [
  {
    id: "PAY123456",
    date: "15 Jun 2023",
    amount: "₹1,500",
    vehicleNo: "MH01AB1234",
    status: "Completed",
    type: "Towing Fee"
  },
  {
    id: "PAY123457",
    date: "22 Jun 2023",
    amount: "₹2,000",
    vehicleNo: "MH01AB1234",
    status: "Completed",
    type: "Storage Fee"
  },
  {
    id: "PAY123458",
    date: "30 Jun 2023",
    amount: "₹500",
    vehicleNo: "MH01AB1234",
    status: "Completed",
    type: "Processing Fee"
  }
];

const PaymentHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!vehicleNumber && !mobileNumber) {
      toast.error("Please enter either vehicle number or mobile number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const downloadReceipt = (paymentId) => {
    toast.success(`Downloading receipt for payment ${paymentId}`);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Payment History</h1>
          <p className="text-lg mt-2 opacity-90">
            View and download your payment receipts
          </p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Payment History</CardTitle>
              <CardDescription>
                Enter your vehicle number or registered mobile number to view your payment history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Registered Mobile Number</Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Search
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {showResults && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Payment Records for {vehicleNumber || mobileNumber}</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Payment ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Vehicle No.</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Receipt</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockPayments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{payment.vehicleNo}</TableCell>
                            <TableCell>{payment.type}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                {payment.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => downloadReceipt(payment.id)}
                                  title="View Receipt"
                                >
                                  <FileText className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => downloadReceipt(payment.id)}
                                  title="Download Receipt"
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Payment Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Total Payments</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Total Amount Paid</p>
                    <p className="text-2xl font-bold">₹4,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Last Payment</p>
                    <p className="text-2xl font-bold">30 Jun 2023</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!showResults && (
            <div className="text-center py-8 text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">No Payment Records Found</h3>
              <p>Search for your payment history using the form above</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PaymentHistory;
