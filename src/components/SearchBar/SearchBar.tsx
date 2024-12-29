import React from 'react';
import './SearchBar.css'; 

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search user by name"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;