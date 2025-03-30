
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Rules = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Rules & Regulations</h1>
          <p className="text-lg mt-2 opacity-90">
            Information about towing policies and procedures
          </p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
            <p className="text-gray-700">
              These rules and regulations govern all aspects of vehicle towing services, impounding, and retrieval procedures. They are established in accordance with the Motor Vehicles Act and related regulations as mandated by the Government of India's Ministry of Road Transport & Highways.
            </p>
          </div>

          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                1. Towing Guidelines
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  Vehicles may be towed due to illegal parking, traffic obstruction, breakdowns, accidents, expired registration, or law enforcement orders.
                </p>
                <p>
                  Towing services will only be carried out by authorized and verified operators.
                </p>
                <p>
                  All towing operations comply with local transport laws and government regulations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                2. Towing Charges & Payments
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  Towing fees are determined based on distance, vehicle type, and towing reason.
                </p>
                <p>
                  The estimated cost will be displayed before confirming the service.
                </p>
                <p>
                  Accepted payment methods include credit/debit cards, mobile wallets, cash, and insurance claims.
                </p>
                <p>
                  Additional fees may apply for extended vehicle storage at impound yards beyond the allowed period.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                3. Vehicle Retrieval Process
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  Owners must provide valid identification, vehicle registration (RC), and any necessary documents before retrieving their towed vehicle.
                </p>
                <p>
                  If the vehicle was towed due to a violation, any fines or penalties must be cleared before release.
                </p>
                <p>
                  Unclaimed vehicles beyond the allowed storage period may be subject to further penalties or auction as per legal guidelines.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Reporting Issues & Disputes
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  If you believe your vehicle was wrongfully towed, you can file a complaint through the website or with local authorities.
                </p>
                <p>
                  Users can report overcharging, vehicle damage, or unprofessional conduct by towing operators.
                </p>
                <p>
                  All disputes will be resolved as per government-mandated procedures.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                5. Safety & Compliance
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  Tow truck operators must follow safety regulations and ensure careful handling of vehicles.
                </p>
                <p>
                  Any damage caused to the vehicle during towing is the responsibility of the towing operator.
                </p>
                <p>
                  Emergency towing requests will be prioritized for stranded drivers in unsafe locations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                6. Privacy & Data Protection
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  Personal information such as vehicle details, location, and payment information is securely handled and only used for towing-related services.
                </p>
                <p>
                  Users can request data modification or deletion as per applicable privacy laws.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                7. Legal Responsibility
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3 pl-4">
                <p>
                  The website acts as a service facilitator and is not liable for third-party towing service actions.
                </p>
                <p>
                  Vehicle owners are responsible for ensuring their vehicle is legally parked and maintained to avoid towing.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
            <p className="mb-4 text-gray-700">
              For more detailed information about specific towing regulations in your area, please refer to the following resources:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <a href="#" className="text-gov-blue hover:underline">
                  Motor Vehicles Act Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gov-blue hover:underline">
                  State-specific Towing Regulations
                </a>
              </li>
              <li>
                <a href="#" className="text-gov-blue hover:underline">
                  Impound Yard Procedures Manual
                </a>
              </li>
              <li>
                <a href="#" className="text-gov-blue hover:underline">
                  Vehicle Owner's Rights Document
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
