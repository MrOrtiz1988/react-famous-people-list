import React from 'react';
import Header from '../Header/Header';
import FamousSection from '../FamousSection/FamousSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FamousSection />
      {/* 
        The list shouldn't go here.
        The list goes inside of the FamousSection Component
      */}
    </div>
  );
}

export default App;
