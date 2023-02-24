import React from 'react';
import { Card } from 'react-bootstrap';

export default function EmojiCard({ name, url }) {
  return (
    <Card className='col-6 col-sm-2 m-md-5 m-4' style={{ width: '128px' }}>
      <Card.Img variant='top' src={url}/>
      <Card.Body>
        <Card.Title className='text-white text-center'>
          :{name}:
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
