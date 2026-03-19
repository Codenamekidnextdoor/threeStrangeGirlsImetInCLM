import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Environment } from './components/pages/Environment';
import { Resources } from './components/pages/Resources';
import { Needs } from './components/pages/Needs';
import { Strengths } from './components/pages/Strengths';
import { ActionPlan } from './components/pages/ActionPlan';
import { Conclusion } from './components/pages/Conclusion';
import { Footer } from './components/Footer';
import { EditPanel } from './components/EditPanel';

export type PageType = 'home' | 'about' | 'environment' | 'resources' | 'needs' | 'strengths' | 'action' | 'conclusion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showEditPanel, setShowEditPanel] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'environment':
        return <Environment onNavigate={setCurrentPage} />;
      case 'resources':
        return <Resources onNavigate={setCurrentPage} />;
      case 'needs':
        return <Needs onNavigate={setCurrentPage} />;
      case 'strengths':
        return <Strengths onNavigate={setCurrentPage} />;
      case 'action':
        return <ActionPlan onNavigate={setCurrentPage} />;
      case 'conclusion':
        return <Conclusion onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full h-full overflow-auto" style={{ scrollBehavior: 'smooth', background: '#E8F4FD' }}>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
      
      {showEditPanel && <EditPanel onClose={() => setShowEditPanel(false)} />}
      
      {!showEditPanel && (
        null
      )}
    </div>
  );
}