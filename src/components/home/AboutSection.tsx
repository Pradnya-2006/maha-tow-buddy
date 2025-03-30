
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="gov-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">About us</h2>
          <p className="text-gray-700 mb-6">
            At MahaTowing, we are dedicated to revolutionizing the towing industry by providing a seamless, transparent, and efficient towing assistance platform. We understand the frustration and confusion vehicle owners face when their car breaks down, gets towed, or requires roadside assistance. Our goal is to eliminate these challenges through technology-driven solutions that ensure quick access to towing services, real-time vehicle tracking, transparent pricing, and easy communication with authorities.
          </p>
          <p className="text-gray-700 mb-8">
            With a customer-first approach, we aim to bring convenience, reliability, and security to every vehicle owner in need of towing assistance.
          </p>
          <Button asChild>
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-xl font-bold text-gov-blue mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be the most trusted and accessible towing assistance platform, ensuring hassle-free, transparent, and efficient service for every vehicle owner.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gov-blue mb-4">Our Mission</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>To simplify the towing process by providing real-time service booking and vehicle tracking.</li>
              <li>To enhance transparency in pricing and service quality.</li>
              <li>To improve safety for stranded drivers through fast and reliable assistance.</li>
              <li>To streamline communication between vehicle owners, towing companies, and authorities.</li>
              <li>To integrate technology for secure payments, insurance claims, and a smarter roadside assistance experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
