import React from 'react';
import SearchBox from './SearchBox';
import './Header.css'

function Header({ searchfield, onSearchChange, onSearchClick }) {
  return (
    <div className="header">
      <div className="title">
        <h1>Meteorite Explorer</h1>
      </div>
      <div className="search">
        <SearchBox searchfield={searchfield} onSearchChange={onSearchChange} onSearchClick={onSearchClick}/>
      </div>
    </div>
  );
}

export default Header;
