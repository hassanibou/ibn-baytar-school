import React from 'react';
import { Leaf, Recycle, Droplets, Sun } from 'lucide-react';

const Ecologie = () => {
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Écologie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Initiatives Écologiques</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            Notre école s'engage activement dans la protection de l'environnement à travers 
            diverses initiatives et projets écologiques impliquant toute la communauté scolaire.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80"
              alt="Jardin pédagogique"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jardin Pédagogique</h3>
            <p className="text-gray-600">
              Les élèves cultivent et entretiennent un jardin potager, apprenant les principes 
              de l'agriculture durable et de l'alimentation responsable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
              alt="Recyclage"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Programme de Recyclage</h3>
            <p className="text-gray-600">
              Un système complet de tri et de recyclage des déchets, avec des ateliers de 
              sensibilisation réguliers.
            </p>
          </div>
        </div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Biodiversité</h3>
            <p className="text-gray-600">Protection de la faune et de la flore locales</p>
          </div>
          <div className="text-center">
            <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Zéro Déchet</h3>
            <p className="text-gray-600">Réduction et valorisation des déchets</p>
          </div>
          <div className="text-center">
            <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Gestion de l'Eau</h3>
            <p className="text-gray-600">Économie et récupération d'eau</p>
          </div>
          <div className="text-center">
            <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Énergie Verte</h3>
            <p className="text-gray-600">Utilisation d'énergies renouvelables</p>
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Notre Plan d'Action</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">Sensibilisation</h4>
                <p className="text-gray-600">Organisation régulière d'ateliers et de conférences</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">Réduction des Déchets</h4>
                <p className="text-gray-600">Objectif zéro plastique à usage unique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecologie;