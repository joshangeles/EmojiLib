import React, { useState, useEffect, Fragment } from 'react';
import EmojiCard from './emoji-card';
import LoadButton from '../components/load-button.jsx';

export default function Library({ results }) {
  // The array of emojis retrieved from the fetch request
  const [emojis, setEmojis] = useState([]);
  // The index to load up to (default 8)
  const [emojiIndex, setEmojiIndex] = useState(8);
  const basePath = 'api/emojis';
  // Empty dependency array so fetch is only called on first render
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

  // If there are search results found from the navbar return those instead
  if (results) {
    return (
      <div className='row justify-content-between px-lg-4 ms-2'>
        <h3 className='ms-md-5 ms-4 my-md-4 my-3'>Results</h3>
        <EmojiCard key={results.emojiId} name={results.name} url={results.url} emojiId={results.emojiId} />
      </div>
    );
  }

  return (
    <div className='row justify-content-between px-lg-4 ms-2'>
      {
        // For each emoji found in the array return either a fragment or an emoji card
        emojis.map((emoji, index) => {
          return (
            // Return a fragment if the index is larger than the emoji index
            (index >= emojiIndex)
              ? <Fragment key={emoji.emojiId} />
              : <EmojiCard key={emoji.emojiId} name={emoji.name} url={emoji.url} emojiId={emoji.emojiId} />
          );
        })
      }
      {/* Passed the emoji index and the function to set emoji index */}
      <LoadButton setEmojiIndex={setEmojiIndex} emojiIndex={emojiIndex}/>
    </div>
  );
}
