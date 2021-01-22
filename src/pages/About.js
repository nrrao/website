import React from "react";
import "../styles.css";

import {
  Footer,
  GetStartedCard,
  Header,
  NavBreadcrumbs,
  PictureCard,
  TitleSection,
} from "../components";

import { Card, CardMedia, Container, Grid } from "@material-ui/core";

const MarketingSection = () => {
  return (
    <Grid container justify="center" alignItems="center" >
      <Grid item xs={12} md={8}>
        <p className='white' style={{ padding: '55px 30px 55px 30px', margin: 'auto' }}>
          With your help, we can create a continuously updated repository for all civic
          tech enthusiasts to find open source projects to model, connect with, and learn from.
        </p>
      </Grid>
    </Grid>
  )
}

const VideoSection = () => {
  return (
    <Grid container alignItems="center" justify="center" style={{ margin: 'auto', width: '70%', backgroundColor: 'white' }}>
      <Card>
        <CardMedia component="video" image='/images/CTI V1.mp4' title='Overview of CTI' controls />
      </Card>
    </Grid>
  )
}


const About = () => {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
  ];

  const pictureMarketingPoints = [
    { alt: "girl coding on her computer", children: "No coding experience needed to submit your project!" ,src: "/images/girlCoding.png"},
    { alt: "girl and guy coding", children: "Make your project more visible with GitHub’s open-source communities",src: "/images/girlandguyCoding.png" },
    { alt: "group coding", children: "The Index is owned by all who contribute to it",src: "/images/groupCoding.png" },
  ];




  return (
    <>
      <Header />
      <div className='default-background' style={{ width: '100vw' }}>
        <Container>
          <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
          <TitleSection>A movement to index every open source civic tech project on GitHub</TitleSection>
          <VideoSection />
          <MarketingSection />
        </Container>
        <PictureCard items={pictureMarketingPoints} />
        <GetStartedCard headerTitle="Ready to get started?" buttonText="Tag your Project" buttonHref="/tag-generator" />
      </div>
      <Footer />
    </>
  );
};

export default About;
