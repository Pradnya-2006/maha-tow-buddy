
import Layout from "@/components/layout/Layout";
import VehicleSearchForm from "@/components/search/VehicleSearchForm";

const Search = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Search for Towed Vehicle</h1>
          <p className="text-lg mt-2 opacity-90">Find your vehicle quickly and easily</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Important Information</h2>
            <p className="text-gray-700 mb-4">
              If your vehicle has been towed, you can use our search tool to locate it. You'll need one of the following:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your vehicle's registration number</li>
              <li>Chassis number</li>
              <li>Owner details (name and registered mobile number)</li>
            </ul>
            <p className="text-gray-700">
              Our system provides real-time information about towed vehicles across all authorized impound yards.
            </p>
          </div>

          <VehicleSearchForm />

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">What happens after finding your vehicle?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gov-blue text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">1</div>
                <h3 className="font-medium mb-2">Get Location Details</h3>
                <p className="text-sm text-gray-600">Our system will show you which impound yard has your vehicle.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gov-blue text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">2</div>
                <h3 className="font-medium mb-2">Pay Required Fees</h3>
                <p className="text-sm text-gray-600">Clear any outstanding fines or towing charges online or at the yard.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gov-blue text-white rounded-full w-8 h-8 flex items-center justify-center mb-3">3</div>
                <h3 className="font-medium mb-2">Retrieve Your Vehicle</h3>
                <p className="text-sm text-gray-600">Visit the yard with your ID and vehicle documents to collect your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
