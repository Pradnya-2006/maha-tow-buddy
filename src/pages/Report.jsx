
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { AlertTriangle, Loader2 } from "lucide-react";

const Report = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issueType, setIssueType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !phone || !issueType || !description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your issue has been reported successfully. We'll get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setIssueType("");
      setVehicleNumber("");
      setDescription("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Report an Issue</h1>
          <p className="text-lg mt-2 opacity-90">
            Let us know about any problems you've encountered
          </p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50 border-l-4 border-gov-orange p-4 mb-8 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-gov-orange" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gov-orange">
                  Use this form to report issues related to vehicle towing, impounding, or retrieval. For traffic violations or emergencies, please contact local police.
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Report Your Issue</CardTitle>
              <CardDescription>
                Fill out the form below with details about the issue you've experienced.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number <span className="text-red-500">*</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issue-type">Issue Type <span className="text-red-500">*</span></Label>
                    <Select value={issueType} onValueChange={setIssueType} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wrong-towing">Wrongful Towing</SelectItem>
                        <SelectItem value="damage">Vehicle Damage During Towing</SelectItem>
                        <SelectItem value="overcharge">Overcharging</SelectItem>
                        <SelectItem value="service-quality">Poor Service Quality</SelectItem>
                        <SelectItem value="retrieval-issues">Retrieval Problems</SelectItem>
                        <SelectItem value="payment-issues">Payment Issues</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle-number">Vehicle Registration Number</Label>
                  <Input
                    id="vehicle-number"
                    placeholder="Enter vehicle registration number (if applicable)"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="uppercase"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description of the Issue <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide details about your issue"
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Report"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center text-center text-sm text-gray-500">
              <p>
                For urgent assistance, call our helpline at{" "}
                <a href="tel:1800-123-4567" className="text-gov-blue hover:underline">
                  1800-123-4567
                </a>
              </p>
            </CardFooter>
          </Card>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">What happens after you report an issue?</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <span className="font-medium">Acknowledgment:</span> You'll receive an immediate confirmation of your report via email.
              </li>
              <li>
                <span className="font-medium">Review:</span> Our team will review your report within 24-48 hours.
              </li>
              <li>
                <span className="font-medium">Investigation:</span> We'll investigate the issue, which may involve contacting the towing service provider or authorities.
              </li>
              <li>
                <span className="font-medium">Resolution:</span> We'll work to resolve your issue and keep you updated on the progress.
              </li>
              <li>
                <span className="font-medium">Feedback:</span> Once resolved, we'll request your feedback on the resolution process.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
