import React, { useState, useEffect, Fragment } from 'react';
import EmojiCard from './emoji-card';
import MobileLoadButton from '../components/mobile-load-button.jsx';
import DesktopLoadButton from './desktop-load-button';
import Import from './desktop-import';

export default function Library({ results, setImportText, setSelectedEmotes, importText }) {
  // The array of emojis retrieved from the fetch request
  const [emojis, setEmojis] = useState([]);
  // The index to load up to (default 8)
  const [emojiIndex, setEmojiIndex] = useState(8);
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState([]);
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
        <EmojiCard setSelectedEmotes={setSelectedEmotes} setImportText={setImportText} key={results.emojiId} name={results.name} url={results.url} emojiId={results.emojiId} />
      </div>
    );
  }
  return (
    <div className='row justify-content-lg-center justify-content-md-between justify-content-center px-md-4 ms-md-5'>
      {
        // For each emoji found in the array return either a fragment or an emoji card
        emojis.map((emoji, index) => {
          return (
            // Return a fragment if the index is larger than the emoji index
            ((index >= emojiIndex))
              ? <Fragment key={emoji.emojiId} />
              : <EmojiCard setImportText={setImportText} setSelectedEmotes={setSelectedEmotes} selected={selected} setSelected={setSelected} key={emoji.emojiId} name={emoji.name} url={emoji.url} emojiId={emoji.emojiId} />
          );
        })
      }
      {/* Passed the emoji index and the function to set emoji index */}
      <div className='d-md-none row justify-content-center'>
        <MobileLoadButton setEmojiIndex={setEmojiIndex} emojiIndex={emojiIndex}/>
      </div>
      <div className='d-md-flex d-none row justify-content-end gx-3'>
        <div className='d-flex col-fluid justify-content-between'>
          <DesktopLoadButton setEmojiIndex={setEmojiIndex} emojiIndex={emojiIndex} />
          <Import importText={importText}/>
        </div>
      </div>
    </div>
  );
}
