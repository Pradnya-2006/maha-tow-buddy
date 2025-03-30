
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gov-dark text-white">
      <div className="gov-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">All Towed Vehicles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/all-towed-vehicles" className="hover:text-gov-orange transition-colors">
                  All Towed vechicles
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gov-orange transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-gov-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Terms & Conditions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-gov-orange transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© 2025 Maha Towing. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
