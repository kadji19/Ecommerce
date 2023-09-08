import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import './App.css'



const App = () => {
  return (
    <div className='app'>
          <Routes>
              <Route path='/*' element={<Layout />} />
          </Routes>
    </div>
  );
};

export default App;
