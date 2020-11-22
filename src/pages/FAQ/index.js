import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import "../../styles.css";
import SearchBar from "../../components/Search/index";
import FAQCard from "../../components/FAQCard/index";
import NavBreadcrumb from "../../components/NavBreadcrumbs";
import { Grid } from "@material-ui/core";

const FAQ = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "radicalcollaboration/faq" },
  ];
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid
        Container
     className={classes.mainContainer}
      >
        <Grid item xs={12} className={classes.navContainer}>
          <NavBreadcrumb crumbs={crumbs} color="#FEFEFE" />
        </Grid>
        <Grid item xs={12} className={classes.headingContainer}>
          <h1 className={classes.heading}>How can we help?</h1>
        </Grid>
        <Grid item xs={12} container className={classes.searchContainer}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid
        Container
        
        className={classes.faqContainer}
      >
        <Grid item xs={12} className={classes.headingContainer}>
          <h5 className={classes.faqHeading}>Frequently Asked Questions:</h5>
        </Grid>
        <Grid item xs={12} lg={8} className={classes.faqCardsContainer}>
          <FAQCard />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.getStartedContainer}
      >
        <Grid item xs={12}>
          <h2 className={classes.getStartedHeading}>Ready to get started?</h2>
        </Grid>
        <Grid item xs={12}>
          <button className={classes.getStartedBtn}>Tag Your Project</button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default FAQ;
