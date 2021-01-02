import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from './styles.js';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Grid, Divider } from "@material-ui/core";

import useFaqs from "./faqHook";



export default function FAQCard(props) {
  //const faqs = props.faqs
  const classes = useStyles();
  const [faqs] = useFaqs();
  console.log(faqs);
  const [openFAQCard, setOpenFAQCard] = useState(true);
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    if(sendRequest){
       //send the request
       setSendRequest(false);
    }
  },
  [sendRequest]);

  return (
    <div style={{backgroundColor:'#F2F2F2'}}>
    <Grid container  alignItems="center" justify="center" style={{padding:'60px'}} >
      <Grid item xs={12} lg={7} style={{paddingBottom:'25px'}}>
      <Typography variant="h5"  style={{color:'#004364'}}>Frequently Asked Questions:</Typography>
      </Grid>
    
      
    <Grid item xs={12} lg={7} >
        {faqs.map((faq) => {
        return (
          <>
            <Accordion style={{ marginBottom: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={faq.key}
                disabled={sendRequest} onClick={() => setSendRequest(true)}
              >
                <h6 className={classes.questionText}>
                  {faq.question}
                </h6>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography className={classes.answerText}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </Grid>
    </Grid>
    </div>
  );
}
