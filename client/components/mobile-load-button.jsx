import React from 'react';
import { Button } from 'react-bootstrap';

export default function MobileLoadButton({ emojiIndex, setEmojiIndex }) {
  // Increase the emoji index by 8 (load 8 more emojis)
  function clickHandler() {
    setEmojiIndex(emojiIndex + 8);
  }

  return (
    <Button
      className='load p-3'
      variant="success"
      style={{ width: '100%' }}
      onClick={clickHandler}>
      Load More Emojis...
    </Button>
  );
}
