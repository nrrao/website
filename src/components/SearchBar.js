/* eslint-disable sort-keys */
import InputAdornment from '@material-ui/core/InputAdornment';
import React,{ useState,useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import useSearchFaq from './UseSearchFaq'
import { FaqSearchContext } from '../pages/SearchFaq'
const defaultStyle = {
  backgroundColor: '#FFFFFF',
  width:'70%',
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

// eslint-disable-next-line max-lines-per-function
export default function SearchBar(props) {
  const faqSearchContext = useContext(FaqSearchContext)
  // const dispatch = faqSearchContext.dispatch
  const [query, setQuery] = useState('');
  const searchUrl = query && `http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`;
  useSearchFaq(searchUrl);

  // const handleOnchange = (e) => {
  //   dispatch({ type: 'SETQUERY', payload: e.target.value })
  // }
  return (
    <>
      <div align='center'>
        <TextField autoFocus InputProps={{ startAdornment: (
          <InputAdornment position="start"><SearchIcon /></InputAdornment>), style: { defaultStyle }}}
        value={faqSearchContext.query}
        onInput={e =>setQuery(e.target.value) }
        variant='outlined'
        style={defaultStyle}
        placeholder={props.placeholder}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        />
      </div>
    </>
  );
}
