/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
// import components from '@/materals';
import CButton from '@/materals/cButton';
import RenderEngine from '@/components/RenderEngine';

export default function MainContent() {
  // const [componentList, setComponentList] = useState<[string, React.FC][]>(Object.entries(components));
  const [componentList, setComponentList] = useState<[string, React.FC][]>([]);

  const handleAddComponent = () => {
    setComponentList([...componentList, ['CInput', CButton]]);
  };

  const [jsonSchema, setJsonSchema] = useState({
    page: {
      type: 'CContainer',
      children: [
        {
          type: 'CContainer',
          children: [
            {
              type: 'CInput'
            },
            {
              type: 'CButton'
            },
            {
              type: 'CButton'
            }
          ]
        }
      ]
    }
  });
  const [currentJson, setCurrentJson] = useState({});

  const handleDrop = (e, ...rest) => {
    console.log(e, rest);
  };

  return (
    <div className="main-container" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <RenderEngine jsonSchema={jsonSchema} currentJson={currentJson} />
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
