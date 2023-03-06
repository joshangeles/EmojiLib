import React, { useState, useEffect, Fragment } from 'react';
import EmojiCard from './emoji-card';
import LoadButton from '../components/load-button.jsx';

export default function Library({ results }) {
  const [emojis, setEmojis] = useState([]);
  const [emojiIndex, setEmojiIndex] = useState(8);
  const basePath = 'api/emojis';
  useEffect(() => {
    fetch(basePath, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setEmojis(data);
      })
      .catch(error => console.error(error));
  }, []);

  if (results) {
    return (
      <div className='row justify-content-start px-lg-4 ms-2'>
        <h3 className='ms-md-5 ms-4 my-md-4 my-3'>Results</h3>
        <EmojiCard key={results.emojiId} name={results.name} url={results.url} emojiId={results.emojiId} />
      </div>
    );
  }

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
