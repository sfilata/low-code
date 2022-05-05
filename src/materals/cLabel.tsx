import React from 'react';
import Chip from '@mui/material/Chip';
import LabelIcon from '@mui/icons-material/Label';

export default function CLabel() {
  return <Chip label="primary" color="primary" />;
}

CLabel.displayName = '标签';
CLabel.icon = <LabelIcon />;
