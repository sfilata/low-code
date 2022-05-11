import React from 'react';
import components from '@/materals';

interface RenderEngineProps {
  jsonSchema: Record<string, unknown>;
  currentJson: Record<string, unknown>;
}

export default function RenderEngine(props: RenderEngineProps) {
  const { jsonSchema, currentJson } = props;

  const renderComponents = (nodeSchema: Record<string, unknown>) => {
    let _children: Record<string, unknown>[] = [];
    if (nodeSchema.children) {
      _children = renderChildren(nodeSchema);
    }
    return startRender(nodeSchema, _children);
  };

  const renderChildren = (nodeSchema: Record<string, unknown>): Record<string, unknown>[] => {
    const nodeArr: Record<string, unknown>[] = nodeSchema.children;

    return nodeArr.map((item) => renderComponents(item));
  };

  const startRender = (nodeSchema: Record<string, unknown>, children: Record<string, unknown>[]) => {
    console.log('start-render', nodeSchema.type);
    const component = components[nodeSchema.type];
    console.log(component);
    return component({ children }, {});
  };

  console.log(Object.keys(components));

  return (
    <div className="container">
      <div className="jsonSchema">{JSON.stringify(jsonSchema)}</div>
      <div className="render-container">{renderComponents(jsonSchema.page)}</div>
    </div>
  );
}
