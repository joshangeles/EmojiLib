import React, { useState } from 'react';
import HomeNavbar from '../components/navbar';
import Library from '../components/library';

export default function Home() {
  const [results, setResults] = useState();
  // eslint-disable-next-line no-unused-vars
  const [importText, setImportText] = useState('/import list:');

  return (
    <div className='bg-dark container-fluid px-lg-5' data-bs-theme="dark">
      <HomeNavbar onQuery={setResults} importText={importText}/>
      <Library results={results}/>
    </div>
  );
}
