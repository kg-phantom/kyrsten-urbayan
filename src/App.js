import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // function renderPage() {

  // }

  return (
    <div>
      <Header
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}></Header>
      <main>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
