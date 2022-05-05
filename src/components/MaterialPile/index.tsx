import React, { useState } from 'react';
import components from '@/materals';
import './index.scss';

export default function MaterialPile() {
  const [materalList, setMateralList] = useState(Object.values(components));

  return (
    <div className="container">
      {materalList.map((item, key) => (
        <div className="component-item" draggable="true" key={key}>
          <div className="title">{item.displayName}</div>
          <div className="icon">{item.icon}</div>
        </div>
      ))}
    </div>
  );
}
