import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
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
    const classes = useStyles();

    return (
   
        <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="search knowledge base"
        inputProps={{ 'aria-label': 'search knowledge base' }}
      />
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
        
        
        
       
    );
}