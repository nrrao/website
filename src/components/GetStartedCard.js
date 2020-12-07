import React from 'react';
import { Grid,Typograhy } from "@material-ui/core";
import NavButton from "./NavButton"

export default function GetStartedCard (props) {
  const title = props.title
  
  const textStyles = {
    color:'#0F1D2F',
    fontWeight: '500',
    margin:'0 auto 20px auto',
  }

  const CardTitle = () => {
    return (
      <Grid container alignItems="center" justify="center">
      <h2 style={textStyles} align='center'>{title}</h2>
      </Grid>
    )
  }

  return (
    <>
      <Grid container alignItems="center" justify="center" style={{padding: '60px', backgroundColor: "#FFFFFF"}}>
        
        <CardTitle />
        <NavButton href={props.href} variant='blue'>{props.buttonTitle}</NavButton>
      </Grid>
    </>
  );
};
