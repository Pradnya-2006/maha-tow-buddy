
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gov-blue to-blue-700 text-white py-16 md:py-24">
      <div className="gov-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Simplified Vehicle Towing & Recovery Services
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Track, locate, and retrieve your towed vehicle with ease through our government-authorized platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gov-orange hover:bg-orange-500">
              <Link to="/search">Search Your Vehicle</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/report">Report an Issue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
