
import { 
  Bell, 
  CreditCard, 
  MapPin, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Alert",
    description: "Get real-time alerts and updates on your towed vehicle's status.",
    icon: <Bell className="h-8 w-8 text-gov-blue" />,
    link: "/alerts"
  },
  {
    title: "Pay Fine",
    description: "Securely pay towing fines and penalties through our platform.",
    icon: <CreditCard className="h-8 w-8 text-gov-orange" />,
    link: "/pay-fine"
  },
  {
    title: "Locate Yards",
    description: "Find the nearest towing yards where your vehicle might be stored.",
    icon: <MapPin className="h-8 w-8 text-gov-blue" />,
    link: "/locate-yards"
  },
  {
    title: "Contact Police",
    description: "Get in touch with local police for towing related assistance.",
    icon: <Shield className="h-8 w-8 text-gov-red" />,
    link: "/contact-police"
  }
];

const ServiceCards = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="gov-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
