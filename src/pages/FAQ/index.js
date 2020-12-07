import React, { useState, useEffect } from "react";
import "../../styles.css";
//import SearchBar from "../../components/Search/index";
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import NavBreadcrumbs from "../../components/NavBreadcrumbs"
//import GetStartedCard from "../../components/GetStartedCard"
import FAQCard from "../../components/FAQCard/index";
//import { Header, Footer, NavBreadcrumbs} from "../../components";
import GetStartedCard from "../../components/GetStartedCard"
import SearchBar from "../../components/SearchBar"
import TitleSection from "../../components/TitleSection"
import { Grid, Container, Paper } from "@material-ui/core";

const FAQ = () => {
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
       <GetStartedCard title={"Can’t find an answer?"} href={"/contactus"} buttonTitle={"Contact Us"}/>
    
    <Footer />
  </>
    
  );
};

export default FAQ;
