import React from 'react';
import { Card } from 'react-bootstrap';

export default function EmojiCard({ name, url, emojiId }) {
  return (
    <Card className='col-4 col-sm-2 m-md-5 m-4' style={{ minWidth: '128px' }}>
      <Card.Img variant='top' src={url} className='p-3'/>
      <Card.Body className='p-0 mt-3'>
        <Card.Title className='text-white text-center'>
          :{name}:
          <Card.Subtitle className='mt-1'>
            - #{emojiId}
          </Card.Subtitle>
        </Card.Title>

      </Card.Body>
    </Card>
  );
}
