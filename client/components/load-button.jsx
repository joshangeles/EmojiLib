import React from 'react';
import { Button } from 'react-bootstrap';

export default function LoadButton({ emojiIndex, setEmojiIndex }) {
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
