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
    <div className="font-sans text-gray-800 antialiased selection:bg-sage-100 selection:text-sage-900 overflow-x-hidden bg-white">
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