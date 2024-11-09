import React, { useState } from 'react';
import '../Navbar/__NavbarStyle.css';

function __Header() {
  const [nightMode, setNightMode] = useState(false);

  const darkModeStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  const toggleDarkMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className="navbar" style={nightMode ? darkModeStyle : {}}>
      <h1>Where in the world?</h1>
      <p onClick={toggleDarkMode}>
        <ion-icon name={nightMode ? 'moon' : 'moon-outline'}></ion-icon>
        {nightMode ? ' Light Mode' : ' Dark Mode'}
      </p>
    </div>
  );
}

export default __Header;
