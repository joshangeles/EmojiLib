import React from 'react';
import { Button } from 'react-bootstrap';

export default function DesktopLoadButton({ emojiIndex, setEmojiIndex, text }) {
  // Increase the emoji index by 8 (load 8 more emojis)
  function clickHandler() {
    setEmojiIndex(emojiIndex + 8);
  }

  return (
    <Button
        className='load p-3 ms-3'
        variant="success"
        style={{ width: '45%' }}
        onClick={clickHandler}>
      {text}
    </Button>
  );
}
