import React, { useState, useEffect, Fragment } from 'react';
import EmojiCard from './emojiCard';
import LoadButton from '../components/load-button.jsx';

export default function Library() {
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

  const library = emojis.map((emoji, index) => {
    if (index >= emojiIndex) return <Fragment key={emoji.emojiId}> </Fragment>;
    return (
      <EmojiCard key={emoji.emojiId} name={emoji.name} url={emoji.url}/>
    );
  });

  return (
    <div className='row justify-content-center px-lg-4'>
      {library}
      <LoadButton setEmojiIndex={setEmojiIndex} emojiIndex={emojiIndex}/>
    </div>
  );
}
