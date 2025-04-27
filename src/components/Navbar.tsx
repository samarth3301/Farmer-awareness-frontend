import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-700 mr-2" />
            <span className="text-xl font-bold text-green-800">AgriSmart</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/pesticide-effects" active={location.pathname === '/pesticide-effects'}>Effects of Pesticides</NavLink>
            <NavLink to="/ph-testing" active={location.pathname === '/ph-testing'}>pH Testing</NavLink>
            <NavLink to="/fertilizer" active={location.pathname === '/fertilizer'}>Fertilizer</NavLink>
            <NavLink to="/expert-help" active={location.pathname === '/expert-help'}>Expert Help</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-green-800 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg pb-4">
            <div className="flex flex-col space-y-4 px-4 pt-4">
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <MobileNavLink to="/pesticide-effects" active={location.pathname === '/pesticide-effects'}>Effects of Pesticides</MobileNavLink>
              <MobileNavLink to="/ph-testing" active={location.pathname === '/ph-testing'}>pH Testing</MobileNavLink>
              <MobileNavLink to="/fertilizer" active={location.pathname === '/fertilizer'}>Fertilizer</MobileNavLink>
              <MobileNavLink to="/expert-help" active={location.pathname === '/expert-help'}>Expert Help</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`font-medium transition-colors duration-200 hover:text-green-600 ${
      active ? 'text-green-600' : 'text-gray-700'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block py-2 text-base font-medium transition-colors duration-200 ${
      active ? 'text-green-600' : 'text-gray-700'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;