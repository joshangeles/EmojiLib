import React from 'react';
import HelloWorld from '../components/hello-world';
import HomeNavbar from '../components/navbar';

export default function Home(props) {
  return (
    <div className='bg-dark' data-bs-theme="dark">
      <HomeNavbar />
      <HelloWorld />
    </div>
  );
}
