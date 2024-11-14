import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">École Ibn Baytar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-200 transition">Accueil</Link>
            <Link to="/sport" className="hover:text-indigo-200 transition">Sport</Link>
            <Link to="/vie-scolaire" className="hover:text-indigo-200 transition">Vie Scolaire</Link>
            <Link to="/ecologie" className="hover:text-indigo-200 transition">Écologie</Link>
            <Link to="/sciences" className="hover:text-indigo-200 transition">Sciences</Link>
            <Link to="/numerique" className="hover:text-indigo-200 transition">Numérique</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded">Accueil</Link>
              <Link to="/sport" className="hover:bg-indigo-700 px-3 py-2 rounded">Sport</Link>
              <Link to="/vie-scolaire" className="hover:bg-indigo-700 px-3 py-2 rounded">Vie Scolaire</Link>
              <Link to="/ecologie" className="hover:bg-indigo-700 px-3 py-2 rounded">Écologie</Link>
              <Link to="/sciences" className="hover:bg-indigo-700 px-3 py-2 rounded">Sciences</Link>
              <Link to="/numerique" className="hover:bg-indigo-700 px-3 py-2 rounded">Numérique</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;