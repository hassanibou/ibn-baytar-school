import React from 'react';
import { ArrowRight, Book, Users, Trophy, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="École"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold">Bienvenue à l'École Ibn Baytar</h1>
            <p className="text-xl max-w-2xl">
              Un environnement d'apprentissage innovant où l'excellence académique 
              rencontre le développement personnel.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg 
              font-semibold transition flex items-center gap-2">
              Découvrir notre école <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Book className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence Académique</h3>
            <p className="text-gray-600">
              Programme éducatif complet et innovant adapté aux besoins de chaque élève.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Communauté Dynamique</h3>
            <p className="text-gray-600">
              Un environnement inclusif favorisant l'épanouissement de tous les élèves.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Activités Sportives</h3>
            <p className="text-gray-600">
              Large choix d'activités sportives pour un développement équilibré.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Lightbulb className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Approche moderne de l'enseignement intégrant les nouvelles technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Actualités</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/sport" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80"
                alt="Sport"
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Compétition Sportive</h3>
                <p className="text-gray-600">
                  Nos équipes se distinguent lors des championnats régionaux.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/ecologie" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Écologie"
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet Écologique</h3>
                <p className="text-gray-600">
                  Initiative de jardinage et sensibilisation à l'environnement.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/sciences" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
                alt="Sciences"
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Expo Sciences</h3>
                <p className="text-gray-600">
                  Découvrez les projets scientifiques de nos élèves.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;