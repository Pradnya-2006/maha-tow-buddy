
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-lg mt-2 opacity-90">Learn more about MahaTowing and our mission</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="section-title">About MahaTowing</h2>
            <p className="mb-4 text-gray-700">
              At MahaTowing, we are dedicated to revolutionizing the towing industry by providing a seamless, transparent, and efficient towing assistance platform. We understand the frustration and confusion vehicle owners face when their car breaks down, gets towed, or requires roadside assistance.
            </p>
            <p className="mb-4 text-gray-700">
              Our goal is to eliminate these challenges through technology-driven solutions that ensure quick access to towing services, real-time vehicle tracking, transparent pricing, and easy communication with authorities.
            </p>
            <p className="mb-4 text-gray-700">
              With a customer-first approach, we aim to bring convenience, reliability, and security to every vehicle owner in need of towing assistance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="section-title">Our Vision</h2>
            <p className="mb-4 text-gray-700">
              To be the most trusted and accessible towing assistance platform, ensuring hassle-free, transparent, and efficient service for every vehicle owner.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="section-title">Our Mission</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>To simplify the towing process by providing real-time service booking and vehicle tracking.</li>
              <li>To enhance transparency in pricing and service quality.</li>
              <li>To improve safety for stranded drivers through fast and reliable assistance.</li>
              <li>To streamline communication between vehicle owners, towing companies, and authorities.</li>
              <li>To integrate technology for secure payments, insurance claims, and a smarter roadside assistance experience.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="section-title">Our Authority</h2>
            <p className="mb-4 text-gray-700">
              MahaTowing is an official service authorized by the Government of India's Ministry of Road Transport & Highways. We operate in compliance with all relevant laws and regulations governing towing services in India.
            </p>
            <p className="mb-4 text-gray-700">
              Our platform serves as the official digital interface for vehicle owners to track, locate, and retrieve their towed vehicles, as well as to handle all related payments and communications with authorities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="section-title">How We Help</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-gov-blue">For Vehicle Owners</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Quickly locate your towed vehicle</li>
                  <li>Get transparent information about towing fees</li>
                  <li>Make secure online payments</li>
                  <li>Receive step-by-step guidance for vehicle retrieval</li>
                  <li>Report issues with towing services</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-gov-blue">For Authorities</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Efficient database management of towed vehicles</li>
                  <li>Streamlined communication with vehicle owners</li>
                  <li>Secure and transparent payment processing</li>
                  <li>Reduced administrative burden</li>
                  <li>Improved compliance with regulations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
