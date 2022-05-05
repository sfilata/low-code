/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import components from '@/materals';
import CButton from '@/materals/cButton';

export default function MainContent() {
  // const [componentList, setComponentList] = useState<[string, React.FC][]>(Object.entries(components));
  const [componentList, setComponentList] = useState<[string, React.FC][]>([]);

  const handleAddComponent = () => {
    setComponentList([...componentList, ['CInput', CButton]]);
  };

  return (
    <div className="main-container">
      <button onClick={handleAddComponent}>Add Button</button>
      {componentList.map(([name, component]) => {
        return (
          <div key={name}>
            {name}: {component({}, {})}
          </div>
        );
      })}
    </div>
  );
}
