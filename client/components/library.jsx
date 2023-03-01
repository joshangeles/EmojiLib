import React, { useState, useEffect, Fragment } from 'react';
import EmojiCard from './emojiCard';
import LoadButton from '../components/load-button.jsx';

export default function Library({ data }) {
  const [emojis, setEmojis] = useState([]);
  const [emojiIndex, setEmojiIndex] = useState(8);
  const basePath = 'api/emojis';

  useEffect(() => {
    fetch(basePath, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setEmojis(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='row justify-content-start px-lg-4 ms-2'>
      {
        emojis.map((emoji, index) => {
          return (
            (index >= emojiIndex)
              ? <Fragment key={emoji.emojiId} />
              : <EmojiCard key={emoji.emojiId} name={emoji.name} url={emoji.url} emojiId={emoji.emojiId} />
          );
        })
      }
      <LoadButton setEmojiIndex={setEmojiIndex} emojiIndex={emojiIndex}/>
    </div>
  );
}
