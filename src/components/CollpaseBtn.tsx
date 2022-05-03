import React, { MouseEventHandler } from 'react';

interface CollpaseBtnProps {
  callback: MouseEventHandler<HTMLDivElement>;
  flag: boolean;
}

export default function CollpaseBtn(props: CollpaseBtnProps) {
  const { callback, flag } = props;
  return (
    <div className="collpase-btn" onClick={callback}>
      <button>{flag ? '折叠' : '展开'}</button>
    </div>
  );
}
