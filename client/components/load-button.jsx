import React from 'react';
import { Button } from 'react-bootstrap';

export default function LoadButton({ emojiIndex, setEmojiIndex }) {
  // Increase the emoji index by 8 (load 8 more emojis)
  function clickHandler() {
    setEmojiIndex(emojiIndex + 8);
  }

  return (
    <div className='row justify-content-center'>
      <Button
      className='load p-3'
      variant="success"
      style={{ width: '50%' }}
      onClick={clickHandler}>
        Load More Emojis...
      </Button>
    </div>
  );
}
