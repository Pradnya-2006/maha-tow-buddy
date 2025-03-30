
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Search, 
  CreditCard, 
  BookOpen, 
  LogIn, 
  AlertTriangle,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About us', path: '/about', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'Search Vehicle', path: '/search', icon: <Search className="h-4 w-4 mr-1" /> },
    { name: 'Payment History', path: '/payment-history', icon: <CreditCard className="h-4 w-4 mr-1" /> },
    { name: 'Rules and Regulation', path: '/rules', icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { name: 'Login', path: '/login', icon: <LogIn className="h-4 w-4 mr-1" /> },
    { name: 'Report issue', path: '/report', icon: <AlertTriangle className="h-4 w-4 mr-1" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b shadow-sm bg-white">
      <div className="gov-container">
        {/* Government Header */}
        <div className="flex items-center justify-center md:justify-start py-2 border-b">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gov-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">GoI</span>
            </div>
            <div className="text-sm md:text-base">
              <p className="font-semibold">Government of India</p>
              <p className="text-xs text-gray-600">Ministry of Road Transport & Highways</p>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl text-gov-blue">MahaTowing</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.path} className="flex items-center">
                  {item.icon}
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "default" : "outline"}
                  size="sm"
                  className="justify-start"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.path} className="flex items-center">
                    {item.icon}
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
