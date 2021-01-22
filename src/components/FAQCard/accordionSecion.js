import React, { useRef, useState, useEffect } from "react";
import { makeStyles,createMuiTheme, ThemeProvider  } from "@material-ui/core/styles";
import useStyles from './styles.js';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box,Grid, Divider } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import useFaqs from "./faqHook";

export default function AccordionSection(props) {
  const faqs = props.faqs || []
  const [currentFaq, setCurrentFaq] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  useEffect(() => {
    const incrementViewCount = async function () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "question":currentFaq.question,
          "answer": currentFaq.answer,
          "view_count": currentFaq.view_count }),
      }
      const response = await fetch(`http://test-civictechindexadmin.herokuapp.com/api/faqs/${currentFaq.id}/increment_count/`, requestOptions);
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
