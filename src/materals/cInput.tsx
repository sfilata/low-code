import React from 'react';
import TextField from '@mui/material/TextField';
import InputIcon from '@mui/icons-material/Input';

export default function CInput() {
  return <TextField defaultValue={'Default Name'}></TextField>;
}

CInput.displayName = '输入框';
CInput.icon = <InputIcon />;
