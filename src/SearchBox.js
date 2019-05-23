import React from 'react';
import './SearchBox.css'

const SearchBox = ({ onSearchChange, onSearchClick }) => {
    return (
        <div>
            <input type="search" placeholder="Enter search terms" onChange={onSearchChange} />
            <button onClick={onSearchClick}>search</button>
        </div>
    );
}

export default SearchBox;