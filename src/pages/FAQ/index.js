/* eslint-disable sort-keys */
import React,{ useState,useEffect }  from "react";
import "../../styles.css";

import {
  Footer,
  GetStartedCard,
  Header,
  NavBreadcrumbs,
  TitleSection,
} from "../../components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Pagination from '@material-ui/lab/Pagination';
import { Container, Grid, Box,Divider } from "@material-ui/core";
import useFetch  from '../../components/UseFetch'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const defaultStyle = {
  backgroundColor: '#FFFFFF',
  width:'70%',
}


// eslint-disable-next-line max-lines-per-function
export default function FAQ({ match }) {
  const radicalcollaboration = match.params.radicalcollaboration

  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "radicalcollaboration/faq" },
  ];

  const [query, setQuery] = useState('');
  const searchUrl = query && `http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`;
  const { status, data } = useFetch(searchUrl);
  const faqs = data



  const SearchBar = (props) => {
    return (
      <>
        <div align='center'>
          <TextField autoFocus InputProps={{ startAdornment: (
            <InputAdornment position="start"><SearchIcon /></InputAdornment>), style: { defaultStyle }}}
          value={query}
          onInput={e => setQuery(e.target.value)}
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


  const AccordionSection = () => {
    const [currentFaq, setCurrentFaq] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);
    useEffect(() => {
      console.log(currentFaq)
      const incrementViewCount = async function () {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "question":currentFaq.question,
            "answer": currentFaq.answer,
            "view_count": currentFaq.view_count }),
        }
        await fetch(`http://test-civictechindexadmin.herokuapp.com/api/faqs/${currentFaq.id}/increment_count/`, requestOptions);
      }
      if (sendRequest){
        // send the request
        incrementViewCount()
        setSendRequest(false);
      }
    }, [sendRequest,currentFaq]);
    return (
      <Grid item xs={12} lg={7} >
        {faqs.map((faq) => {
          return (
            <div key={faq.id}>
              <Accordion style={{ marginBottom: "20px" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} disabled={sendRequest} onClick={() => {setSendRequest(true);setCurrentFaq(faq)}}>
                  <h6 style={{ fontSize:'20px',margin:'0', padding:'0 25px' }}>{faq.question}</h6>
                </AccordionSummary>
                <Divider />
                <AccordionDetails> <Typography style={{ padding:'0 25px' }}>{faq.answer}</Typography></AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Grid>
    )
  }

  const PaginationSection = () =>{
    return (
      <Grid item xs={12} lg={7} >
        <Box my={2} display="flex" justifyContent="center">
          <Pagination count={5} variant="outlined" shape="rounded" color="primary" />
        </Box>
      </Grid>
    )
  }
  const FAQCard = (props) => {
    return (
      <>
        <div style={{ backgroundColor:'#F2F2F2' }}>
          <Grid container  alignItems="center" justify="center" style={{ padding:'60px' }} >
            <Grid item xs={12} lg={7} style={{ paddingBottom:'25px' }}>
              <Typography variant="h5"  style={{ color:'#004364' }}>{props.title}</Typography>
            </Grid>
            <AccordionSection/>
            <PaginationSection/>
          </Grid>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className='default-background' style={{ paddingBottom: '80px',width: '100vw' }} >
        <Container>
          <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
          <TitleSection title={"How can we help?"} />
          <SearchBar placeholder={"Search the knowledge base"} />
        </Container>
      </div>
      {status === 'fetchedFaq' && <FAQCard title={"Frequently Asked Questions:"}/>}
      {status === 'fetchedSearch' && (
        <>
          {faqs.length === 0 && <div> No Search Results found!</div>}
          {<FAQCard title={`Search results for ${query}`}/>}
        </>
      )}
      <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />

      <Footer />
    </>

  );
}


