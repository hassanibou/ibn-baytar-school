import React from 'react';
import { Beaker, Atom, Brain, Microscope } from 'lucide-react';

const Sciences = () => {
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
            alt="Sciences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Sciences et Découvertes</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            Notre programme scientifique offre aux élèves une approche pratique et innovante 
            des sciences, encourageant la curiosité et l'esprit critique.
          </p>
        </div>

        {/* Disciplines */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
              alt="Physique"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Physique</h3>
            <p className="text-gray-600">
              Expériences pratiques et découverte des lois fondamentales de l'univers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80"
              alt="Chimie"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Chimie</h3>
            <p className="text-gray-600">
              Laboratoire moderne pour explorer les réactions et transformations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1581093458791-4a2b7b366621?auto=format&fit=crop&q=80"
              alt="Biologie"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Biologie</h3>
            <p className="text-gray-600">
              Étude du vivant à travers des observations microscopiques et expériences.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Beaker className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Laboratoires</h3>
            <p className="text-gray-600">Équipements modernes et sécurisés</p>
          </div>
          <div className="text-center">
            <Atom className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Projets</h3>
            <p className="text-gray-600">Recherches et expérimentations</p>
          </div>
          <div className="text-center">
            <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Approche pédagogique moderne</p>
          </div>
          <div className="text-center">
            <Microscope className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Observation</h3>
            <p className="text-gray-600">Matériel d'observation avancé</p>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">Projets Scientifiques</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80"
                alt="Projet Robotique"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold">Club Robotique</h4>
                <p className="text-gray-600">
                  Conception et programmation de robots par les élèves.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1581093458791-4a2b7b366621?auto=format&fit=crop&q=80"
                alt="Laboratoire"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold">Recherche en Biologie</h4>
                <p className="text-gray-600">
                  Étude de l'impact des changements climatiques sur la biodiversité locale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sciences;