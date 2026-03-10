import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Users, Target, Zap, Award } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Pathways from './components/Pathways';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navigation onApplyClick={() => setIsApplyOpen(true)} />
      <Hero onApplyClick={() => setIsApplyOpen(true)} />
      <Features />
      <Pathways />
      <CTA onApplyClick={() => setIsApplyOpen(true)} />
      <Footer />
      {isApplyOpen && <ApplyModal onClose={() => setIsApplyOpen(false)} />}
    </div>
  );
}

export default App;
