import React from 'react';

import { Button } from './styles';

export default function SubmitButton({ children, disabled, onClick }) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}
