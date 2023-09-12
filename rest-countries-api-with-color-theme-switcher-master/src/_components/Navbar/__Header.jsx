import React, { useState } from 'react';
import '../Navbar/__NavbarStyle.css';

function __Header() {
  const [nightMode, setNightMode] = useState(false);

  const dark = {
    backgroundColor: 'black',
    color: 'white',
  };

  const toggleDarkMode = () => {
    setNightMode(!nightMode); // Toggle the nightMode state
  };

  return (
    <>
      <div className="navbar" style={nightMode ? dark : {}}>
        <h1>Where in the world?</h1>
        <p onClick={toggleDarkMode}>
          <ion-icon name={nightMode ? 'moon' : 'moon-outline'}></ion-icon> Dark Mode
        </p>
      </div>
    </>
  );
}

export default __Header;
