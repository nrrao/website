import InputAdornment from '@material-ui/core/InputAdornment';
<<<<<<< HEAD
import React,{useState,useEffect} from 'react';
=======
import React from 'react';
>>>>>>> main
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const defaultStyle = {
<<<<<<< HEAD
  backgroundColor: '#FFFFFF',
  width:'70%',
=======
  backgroundColor: '#fffff',
>>>>>>> main
}

/**
 * Simple search.
 *
 * FIXME: Should the functions for search be defined here?
 *       const [query, setQuery] = useState('');
 *       const [results, setResults] = useState('');
 *
 *       const handleSubmit = (event) => {
 *          if (event.key === 'Enter') { console.log(query); } };
 *
 * <SearchBar value={query} onInput={e => setQuery(e.target.value)} placeholder="Search the Civic Tech Index" onKeyPress={handleSubmit} />
 *
 * @param {*} value Value of the input passed into the SearchBar. You'll want to pass a state variable here
 * @param {*} onInput Supply hook for value state changes
 * @param {String} placeholder Default placeholder value
 * @param {function} onKeyPress Listens for enter value.
 */

export default function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');
    console.log("query",query)

    useEffect(() => {
        
        async function fetchSearchResults() {
          const fullResponse = await fetch(`http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`);
          const responseJson = await fullResponse.json();
          console.log(responseJson)
          setResults(responseJson);
          
        }
    
        fetchSearchResults();
      }, [query]);
  
  return (
    <div align='center'>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { defaultStyle },
        }}
<<<<<<< HEAD
        value={query}
        onInput={e => setQuery(e.target.value)}
=======
        value={props.query}
        onInput={props.onInput}
>>>>>>> main
        variant='outlined'
        style={defaultStyle}
        placeholder={props.placeholder}
        fullWidth
        margin="normal"
<<<<<<< HEAD
=======
        onKeyPress={props.onKeyPress}
>>>>>>> main
        InputLabelProps={{
          shrink: true,
        }}
      />
<<<<<<< HEAD

=======
>>>>>>> main
    </div>
  );
}
