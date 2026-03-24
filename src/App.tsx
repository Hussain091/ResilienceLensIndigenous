import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resilience from './pages/Resilience';
import Stories from './pages/Stories';
import Barriers from './pages/Barriers';
import Support from './pages/Support';
import Resources from './pages/Resources';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'resilience':
        return <Resilience />;
      case 'stories':
        return <Stories />;
      case 'barriers':
        return <Barriers />;
      case 'support':
        return <Support />;
      case 'resources':
        return <Resources />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="bg-stone-900 text-stone-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            This project was made on the traditional lands of the Haudenosaunee, Anishinaabe, and Mississaugas of the Credit. 
            I want to acknowledge this land and say thank you for it with honesty and responsibility.

          </p>
          <p className="text-sm text-stone-400">
            This website is for NBE 3U · 4Rs Media Formative

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
