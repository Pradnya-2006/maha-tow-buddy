
import { 
  Clock, 
  CreditCard, 
  MessageCircle, 
  Shield, 
  Truck, 
  AlertCircle,
  DollarSign,
  Bell
} from "lucide-react";

const objectives = [
  {
    title: "Provide Quick & Reliable Towing Services",
    description: "Connect users with verified, professional tow truck operators in real time.",
    icon: <Truck className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Ensure Transparency & Fair Pricing",
    description: "Offer upfront pricing and secure digital payments to prevent overcharging and fraud.",
    icon: <DollarSign className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Enhance Safety & Security",
    description: "Implement emergency assistance and vehicle tracking for driver protection.",
    icon: <Shield className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Improve Communication with Authorities",
    description: "Offer an easy-to-use database to locate impounded vehicles and contact relevant authorities.",
    icon: <MessageCircle className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Integrate Insurance & Payment Solutions",
    description: "Simplify claims processing and offer multiple payment options for customer convenience.",
    icon: <CreditCard className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Offer 24/7 Assistance",
    description: "Ensure round-the-clock service availability for emergencies and breakdowns.",
    icon: <Clock className="h-6 w-6 text-gov-blue" />
  },
  {
    title: "Enable Issue Reporting & Alerts",
    description: "Allow users to report issues with towing services, dispute unfair charges, and receive real-time updates on vehicle status.",
    icon: <Bell className="h-6 w-6 text-gov-blue" />
  }
];

const ObjectivesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="gov-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Objectives</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-full">
                  {objective.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{objective.title}</h3>
                  <p className="text-gray-600 text-sm">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
