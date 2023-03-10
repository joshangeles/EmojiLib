/* eslint-disable comma-dangle */
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Import({ importText }) {
  function clickHandler() {
    navigator.clipboard.writeText(importText);
  }
  return (
    <Button
        className='load'
        variant='success'
        style={{ height: '100%', width: '45%' }}
        onClick={clickHandler}>
      Import
    </Button>

  );
}
