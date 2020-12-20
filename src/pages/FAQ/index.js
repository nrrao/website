import React, { useState, useEffect } from "react";
import "../../styles.css";

import {
  Header,
  Footer,
  GetStartedCard,
  NavBreadcrumbs,
  TitleSection
} from "../../components";
import FAQCard from "../../components/FAQCard/index";

import SearchBar from "../../components/SearchBar"

import { Grid, Container, Paper } from "@material-ui/core";

export default function FAQ({match}){
  const radicalcollaboration = match.params.radicalcollaboration

  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "radicalcollaboration/faq" },
  ];
  


  return (
    <>
    <Header />
    <div className='default-background' style={{ width: '100vw',paddingBottom:'80px' }} >
      <Container>
        <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
        <TitleSection title={"How can we help?"} />
        <SearchBar placeholder={"Search the knowledge base"}/>
      </Container>
      </div>
       <FAQCard/>
       <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
    
    <Footer />
  </>
    
  );
};


