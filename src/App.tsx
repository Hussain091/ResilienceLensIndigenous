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
            Created to honor and learn about Indigenous resilience in Canada
          </p>
          <p className="text-sm text-stone-400">
            All content is sourced from reputable organizations and educational resources. See the Resources
            page for full citations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
