import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">École Ibn Baytar</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <p>123 Rue de l'École, 75001 Paris</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-indigo-400" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-400" />
                <p>contact@ibnbaytar.edu</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/vie-scolaire" className="hover:text-indigo-400">Vie Scolaire</a></li>
              <li><a href="/sport" className="hover:text-indigo-400">Sport</a></li>
              <li><a href="/sciences" className="hover:text-indigo-400">Sciences</a></li>
              <li><a href="/numerique" className="hover:text-indigo-400">Numérique</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li>Lundi - Vendredi: 8h00 - 17h00</li>
              <li>Samedi: 8h00 - 12h00</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} École Ibn Baytar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;