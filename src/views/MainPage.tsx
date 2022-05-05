import React, { useState } from 'react';
import CollpaseBtn from '@/components/CollpaseBtn';
import MaterialPile from '@/components/MaterialPile';
import MainContent from '@/components/MainContent';
import PropsPanel from '@/components/PropsPanel';

export default function MainPage() {
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  return (
    <div className="content-container">
      <div className={leftVisible ? 'left-container' : 'collpse'}>
        {/* <CollpaseBtn callback={() => setLeftVisible(!leftVisible)} flag={leftVisible} /> */}
        <MaterialPile />
      </div>
      <div className="content">
        <MainContent />
      </div>
      <div className={rightVisible ? 'right-container' : 'collpse'}>
        {/* <CollpaseBtn callback={() => setRightVisible(!rightVisible)} flag={rightVisible} /> */}
        <PropsPanel />
      </div>
    </div>
  );
}
