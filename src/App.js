import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRouter from './Router'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
