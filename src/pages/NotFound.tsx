
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="bg-gov-blue text-white h-24 w-24 rounded-full flex items-center justify-center text-4xl font-bold mb-6 mx-auto">
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-y-3">
          <Button asChild size="lg" className="w-full">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link to="/search">Search Vehicle</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
