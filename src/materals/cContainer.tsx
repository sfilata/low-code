import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface cContainerProps {
  children: React.ReactElement;
}
export default function CContainer(props: cContainerProps) {
  return <div className="Ccontainer">{props.children}</div>;
}

CContainer.displayName = '容器';
CContainer.icon = <CheckBoxIcon />;
