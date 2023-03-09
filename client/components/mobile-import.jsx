import React from 'react';
import { Button } from 'react-bootstrap';

export default function Import({ importText }) {
  const textAreaStyle = {
    width: '100%',
    marginTop: '5px'
  };

  function clickHandler() {
    navigator.clipboard.writeText(importText);
  }

  return (
    <div>
      <textarea style={textAreaStyle} defaultValue={importText} disabled />
      <Button onClick={clickHandler} style={{ width: '100%' }}>Copy Import Cmd</Button>
    </div>
  );
}
