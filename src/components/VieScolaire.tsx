import React from 'react';
import { BookOpen, Clock, Users, Calendar, Award } from 'lucide-react';

const VieScolaire = () => {
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80"
            alt="Vie Scolaire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Vie Scolaire</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            La vie scolaire à Ibn Baytar est riche et dynamique, offrant aux élèves un environnement 
            propice à leur épanouissement académique et personnel.
          </p>
        </div>

        {/* Daily Schedule */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Emploi du Temps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <Clock className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold">Horaires des Cours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Matin:</span>
                  <span>8h00 - 12h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Pause déjeuner:</span>
                  <span>12h00 - 14h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Après-midi:</span>
                  <span>14h00 - 17h00</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold">Activités Parascolaires</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Club de Sciences</li>
                <li>Ateliers Artistiques</li>
                <li>Club d'Échecs</li>
                <li>Théâtre</li>
              </ul>
            </div>
          </div>
        </div>

        {/* School Life Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
              alt="Bibliothèque"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Centre de Documentation</h3>
            <p className="text-gray-600">
              Une bibliothèque moderne avec plus de 10,000 ouvrages et des ressources numériques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80"
              alt="Cafétéria"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Restaurant Scolaire</h3>
            <p className="text-gray-600">
              Des repas équilibrés préparés sur place avec des produits locaux.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
              alt="Salle de classe"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Salles de Classe</h3>
            <p className="text-gray-600">
              Des espaces modernes équipés des dernières technologies éducatives.
            </p>
          </div>
        </div>

        {/* Events Calendar */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Événements à Venir</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">Journée Portes Ouvertes</h4>
                  <p className="text-gray-600">20 Mars 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">Conseil de Classe</h4>
                  <p className="text-gray-600">25 Mars 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VieScolaire;