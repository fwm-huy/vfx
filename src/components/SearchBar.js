import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = (props) => {
  const { query, setQuery } = props;
  return (
    <Input 
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default SearchBar;

