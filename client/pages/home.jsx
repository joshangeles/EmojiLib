import React, { useState, useEffect } from 'react';
import HomeNavbar from '../components/navbar';
import Library from '../components/library';
import HelpModal from '../components/help-modal';

export default function Home() {
  // The array of emojis retrieved from the fetch request
  const [emojis, setEmojis] = useState([]);
  const [results, setResults] = useState();
  // eslint-disable-next-line no-unused-vars
  const [importText, setImportText] = useState('/import list:');
  const [selectedEmotes, setSelectedEmotes] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [emotesFound, setEmotesFound] = useState(null);

  const handleShow = () => setShow(true);

  useEffect(() => {
    setImportText(`/import list:${selectedEmotes}`);
  }, [selectedEmotes]);
  return (
    <div className='bg-dark container-fluid px-lg-5' data-bs-theme="dark">
      <HomeNavbar onQuery={setResults} hasEmotes={setEmotesFound} importText={importText} handleShow={handleShow} setEmojis={setEmojis} emojis={emojis} />
      {/* may need to be passed show */}
      <Library setSelectedEmotes={setSelectedEmotes} importText={importText} results={results} hasEmotes={emotesFound} setEmojis={setEmojis} emojis={emojis} />
      <HelpModal handleShow={handleShow} setShow={setShow} show={show} />
    </div>
  );
}
