import React, { useState } from 'react';
import CollpaseBtn from '@/components/CollpaseBtn';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialPile from '@/components/MaterialPile';
import MainContent from '@/components/MainContent';
import PropsPanel from '@/components/PropsPanel';
import './App.scss';

function App() {
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className={leftVisible ? 'left-container' : 'collpse'}>
          <CollpaseBtn callback={() => setLeftVisible(!leftVisible)} flag={leftVisible} />
          <MaterialPile />
        </div>
        <div className="content">
          <MainContent />
        </div>
        <div className={rightVisible ? 'right-container' : 'collpse'}>
          <CollpaseBtn callback={() => setRightVisible(!rightVisible)} flag={rightVisible} />
          <PropsPanel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
