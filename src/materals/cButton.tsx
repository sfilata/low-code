import React from 'react';
import Button from '@mui/material/Button';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

export default function CButton() {
  return <Button>Default Name</Button>;
}

CButton.displayName = '按钮';
CButton.icon = <SmartButtonIcon />;
