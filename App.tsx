import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import InstructorStory from './components/InstructorStory';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="font-sans text-white antialiased selection:bg-neon-blue selection:text-white overflow-x-hidden bg-brand-dark">
      <Navigation />
      <main>
        <Hero />
        <ProblemSolution />
        <InstructorStory />
        <Curriculum />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;