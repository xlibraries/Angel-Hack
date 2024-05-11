import React from 'react';
import './App.css';
import Header from './Fronend/Header';
import Main from './Fronend/Main';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
