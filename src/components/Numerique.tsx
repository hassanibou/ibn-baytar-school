import React from 'react';
import { Monitor, Code, Wifi, Lock } from 'lucide-react';

const Numerique = () => {
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
            alt="Numérique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Environnement Numérique</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            L'école Ibn Baytar intègre les technologies numériques dans son enseignement pour 
            préparer les élèves aux défis du 21e siècle.
          </p>
        </div>

        {/* Equipment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
              alt="Ordinateurs"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Salles Informatiques</h3>
            <p className="text-gray-600">
              Équipées des derniers ordinateurs et logiciels éducatifs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524055988636-436cfa46e59e?auto=format&fit=crop&q=80"
              alt="Tablettes"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tablettes Numériques</h3>
            <p className="text-gray-600">
              Disponibles pour un apprentissage interactif en classe.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              alt="Réseaux"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Infrastructure Réseau</h3>
            <p className="text-gray-600">
              Connexion internet haut débit et réseau sécurisé.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Monitor className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Équipement</h3>
            <p className="text-gray-600">Matériel moderne et performant</p>
          </div>
          <div className="text-center">
            <Code className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Programmation</h3>
            <p className="text-gray-600">Initiation au code</p>
          </div>
          <div className="text-center">
            <Wifi className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Connectivité</h3>
            <p className="text-gray-600">Réseau haut débit</p>
          </div>
          <div className="text-center">
            <Lock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-600">Protection des données</p>
          </div>
        </div>

        {/* Digital Projects */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Projets Numériques</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
                alt="Coding"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold">Ateliers de Programmation</h4>
                <p className="text-gray-600">
                  Initiation au code et développement de projets numériques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Digital Learning"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold">Apprentissage en Ligne</h4>
                <p className="text-gray-600">
                  Plateforme d'apprentissage interactive accessible 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numerique;