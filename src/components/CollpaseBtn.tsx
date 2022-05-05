import React, { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

interface CollpaseBtnProps {
  callback: MouseEventHandler<HTMLElement>;
  flag: boolean;
}

export default function CollpaseBtn(props: CollpaseBtnProps) {
  const { callback, flag } = props;
  return (
    <div className="collpase-btn">
      <Button onClick={callback} size="small" variant={flag ? 'outlined' : 'contained'}>
        {flag ? '折叠' : '展开'}
      </Button>
    </div>
  );
}
