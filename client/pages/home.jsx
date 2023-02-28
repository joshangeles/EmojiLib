import React from 'react';
import HomeNavbar from '../components/navbar';
import Library from '../components/library';

export default function Home(props) {
  return (
    <div className='bg-dark container-fluid px-lg-5' data-bs-theme="dark">
      <HomeNavbar />
      <Library />
    </div>
  );
}
