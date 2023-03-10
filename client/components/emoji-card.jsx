import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function EmojiCard({ name, url, emojiId, selected, setSelected, setImportText, importText, setSelectedEmotes }) {
  const [style, setStyle] = useState({
    minWidth: '128px',
    cursor: 'pointer'
  });

  function clickHandler(e) {
    // Toggle border on click
    if (!style.border) {
      setStyle({
        minWidth: '128px',
        cursor: 'pointer',
        border: '1px solid white'
      });
      selected.push(name);
      setSelected(selected);
    } else {
      setStyle({
        minWidth: '128px',
        cursor: 'pointer'
      });
      setSelected(selected.filter(emote => emote !== name));
    }
  }
  const selectedEmotes = selected.join(',');
  setSelectedEmotes(`${selectedEmotes}`);
  return (
    <Card onClick={clickHandler} className='col-4 col-sm-2 m-lg-5 m-md-4 m-3' style={style}>
      <Card.Img variant='top' src={url} className='p-3'/>
      <Card.Body className='p-0 mt-3'>
        <Card.Title style={{ fontSize: '16px' }} className='text-white text-center'>
          :{name}:
          <Card.Subtitle className='mt-1'>
            - #{emojiId}
          </Card.Subtitle>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
