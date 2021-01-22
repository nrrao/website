import React, { useRef, useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box,Grid, Divider } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import useFaqs from "./faqHook";
import AccordionSection from './accordionSecion'

const PaginationSection = () =>{
  return (
    <Grid item xs={12} lg={7} >
      <Box my={2} display="flex" justifyContent="center">
        <Pagination count={5} variant="outlined" shape="rounded" color="primary" />
      </Box>
    </Grid>
  )
}
export default function FAQCard(props) {
  const [faqs] = useFaqs();
  const [showFaq,setShowFaq] = useState(true)
  return (
    <>
      <div style={{ backgroundColor:'#F2F2F2' }}>
        <Grid container  alignItems="center" justify="center" style={{ padding:'60px' }} >
          <Grid item xs={12} lg={7} style={{ paddingBottom:'25px' }}>
            <Typography variant="h5"  style={{ color:'#004364' }}>Frequently Asked Questions:</Typography>
          </Grid>
          <AccordionSection faqs={faqs} showFaq={showFaq}/>
          <PaginationSection/>
        </Grid>
      </div>
    </>
  );
}
