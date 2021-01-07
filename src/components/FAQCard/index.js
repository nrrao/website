import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from './styles.js';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Grid, Divider } from "@material-ui/core";

//import useFaqs from "./faqHook";



export default function FAQCard(props) {

  const classes = useStyles();
  //const [faqs] = useFaqs();
 // console.log(faqs);
  const [faqs, setFaqs] = useState([]);
  //const faqs = useRef([]);
  const [currentFaq, setCurrentFaq] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    
    async function fetchFaqs() {
      const fullResponse = await fetch('http://test-civictechindexadmin.herokuapp.com/api/faqs/');
      const responseJson = await fullResponse.json();
      console.log(responseJson)
      setFaqs(responseJson);
    }

    fetchFaqs();
    
    console.log(currentFaq)
    console.log(sendRequest)
    async function incrementViewCount(){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "question":currentFaq.question,
        "answer": currentFaq.answer,
        "view_count": currentFaq.view_count })
      }
      console.log(requestOptions)
      const response = await fetch(`http://test-civictechindexadmin.herokuapp.com/api/faqs/${currentFaq.id}/increment_count/`, requestOptions);
      
    }
    if(sendRequest){
        console.log('++++++++')
       //send the request
      incrementViewCount()
      setSendRequest(false);
    }
   
  },
  [sendRequest,currentFaq]);



  return (
    <>
    <div style={{backgroundColor:'#F2F2F2'}}>
    <Grid container  alignItems="center" justify="center" style={{padding:'60px'}} >
      <Grid item xs={12} lg={7} style={{paddingBottom:'25px'}}>
      <Typography variant="h5"  style={{color:'#004364'}}>Frequently Asked Questions:</Typography>
      </Grid>
    
      
    <Grid item xs={12} lg={7} >
        {faqs.map((faq) => {
        return (
          <div key={faq.id}>
            <Accordion style={{ marginBottom: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                disabled={sendRequest} onClick={() => {setSendRequest(true);setCurrentFaq(faq)}}
              >
                <h6 style={{padding:'0 25px',margin:'0', fontSize:'20px'}}>
                  {faq.question}
                </h6>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography style={{padding:'0 25px'}}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Grid>
    </Grid>
    </div>
    </>
  );
}
