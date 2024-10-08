//headers 
import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header-container">
      <img
        src="https://imgs.search.brave.com/RkSxzeSxJP1iZ1dx-_mr9yVtLjzkJexkNkjjPCjPk1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzIyLzk1Lzk5/LzM2MF9GXzMyMjk1/OTkyOV9SSTJwdnNH/anhVWkhNM0lFMTJw/WDNkNHA4dVhGYlRa/cy5qcGc"
        alt="Problem?"
        className="header-img"
      />
      <h1 className="header-title">Meme Generator</h1>
    </header>
  );
}

export default Header;
