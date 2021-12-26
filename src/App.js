import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  function renderPage() {
    switch (currentPage) {
      case 'About':
        return <About></About>;
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact></Contact>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  }

  return (
    <div>
      <Header
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}></Header>
      <main>
        <div>
          {renderPage()}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
