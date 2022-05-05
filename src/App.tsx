import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import router from '@/router';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {router.map(({ path, name, component }) => (
          <Route key={name} path={path} element={component()} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
