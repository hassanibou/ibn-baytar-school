import React from 'react';
import { Trophy, Users, Calendar, Medal } from 'lucide-react';

const Sport = () => {
  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80"
            alt="Sport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">Sports et Activités Physiques</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            À l'École Ibn Baytar, nous considérons le sport comme un élément essentiel du développement 
            de nos élèves. Notre programme sportif complet vise à promouvoir la santé physique, 
            l'esprit d'équipe et le dépassement de soi.
          </p>
        </div>

        {/* Sports Offered */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Nos Disciplines Sportives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
                alt="Football"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Football</h3>
              <p className="text-gray-600">
                Équipes masculines et féminines, entraînements hebdomadaires et compétitions régionales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
                alt="Basketball"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Basketball</h3>
              <p className="text-gray-600">
                Programme complet avec équipes de différents niveaux et participation aux tournois.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
                alt="Athlétisme"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Athlétisme</h3>
              <p className="text-gray-600">
                Course, saut, lancer : développez vos capacités athlétiques individuelles.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Compétitions</h3>
            <p className="text-gray-600">Participations régulières aux tournois régionaux et nationaux</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Équipes</h3>
            <p className="text-gray-600">Plus de 10 équipes sportives différentes</p>
          </div>
          <div className="text-center">
            <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Entraînements</h3>
            <p className="text-gray-600">Sessions régulières adaptées aux niveaux</p>
          </div>
          <div className="text-center">
            <Medal className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Réussites</h3>
            <p className="text-gray-600">Nombreux succès en compétitions</p>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Événements à Venir</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">Tournoi de Football Inter-écoles</h4>
                  <p className="text-gray-600">15 Mars 2024 - Stade Municipal</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">Championnat d'Athlétisme</h4>
                  <p className="text-gray-600">22 Mars 2024 - Piste d'Athlétisme</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">Match de Basketball</h4>
                  <p className="text-gray-600">29 Mars 2024 - Gymnase de l'école</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;