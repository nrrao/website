import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from './styles.js';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

import useFaqs from "./faqHook";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     marginBottom: "10px",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

export default function FAQCard(props) {
  //const faqs = props.faqs
  const classes = useStyles();
  const [faqs] = useFaqs();
  console.log(faqs);
  const [openFAQCard, setOpenFAQCard] = useState(true);

  return (
    <div className={classes.root}>
      {faqs.map((faq) => {
        return (
          <>
            <Accordion style={{ marginBottom: "20px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={faq.key}
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
    </div>
  );
}
