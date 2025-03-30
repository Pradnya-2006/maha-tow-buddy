
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.error("Invalid credentials. Please try again.");
    }, 1500);
  };

  const handleSendOtp = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      toast.success("OTP sent successfully");
    }, 1500);
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.error("Invalid OTP. Please try again.");
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-lg mt-2 opacity-90">Access your MahaTowing account</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Account Login</CardTitle>
            <CardDescription className="text-center">
              Login to access your towing details and history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form onSubmit={handleEmailLogin} className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-gov-blue hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <LogIn className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="phone">
                {!otpSent ? (
                  <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleSendOtp}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        "Send OTP"
                      )}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleOtpLogin} className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="otp">One-Time Password</Label>
                      <Input
                        id="otp"
                        placeholder="Enter the OTP sent to your phone"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="text-sm text-gov-blue hover:underline"
                        onClick={() => {
                          setOtpSent(false);
                          setOtp("");
                        }}
                      >
                        Change mobile number
                      </button>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <LogIn className="mr-2 h-4 w-4" />
                      )}
                      {isLoading ? "Verifying..." : "Verify & Login"}
                    </Button>
                  </form>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-gov-blue hover:underline">
                Register
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
