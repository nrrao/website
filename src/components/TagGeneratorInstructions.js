import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  containerPadding: {
    paddingLeft:'100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft:'40px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft:'16px',
    },
  },
  btnStyle: {
    '& .MuiButton-label':{
      whiteSpace:'inherit',
    },
  },
  txtStyle:{
    textAlign: 'center',
    fontWeight:500,
    [theme.breakpoints.down('xs')]: {
      fontSize:'1.5rem',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: '12px',
  },
  ptextStyle:{
    fontWeight:400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
  btnColor:{
    backgroundColor:theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    color: theme.palette.outline.gray,
  },
  imgStyle:{
    width:'275px',
    padding:theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width:'440px',
    },
  },
  typoStyle: {
    fontWeight:'400',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}));

const BottomSection = () =>{
  const classes = useStyles()

  const PaperComp = ({ text,btext,bhref }) =>{
    return (
      <Grid style={{ padding:'30px 15px' }}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid style={{ padding:'15px 25px' }}>
            <Typography variant='h6' className={classes.ptextStyle}>{text}</Typography>
          </Grid>
          <Grid style={{ padding:'15px' }}><Button href={bhref} className={classes.btnColor}>{btext}</Button></Grid>
        </Paper>
      </Grid>
    )
  }
  return (
    <>
      <Box className='containerWhite'>
        <Container>
          <Grid container direction="column" alignItems="center">
            <Grid item md={6}  style={{ paddingTop: '48px' }}>
              <Typography variant='h3' className={classes.txtStyle}> This project is so new we are celebrating every win</Typography>
            </Grid>
            <Grid item md={6} style={{ padding: '24px 0px' }} >
              <Typography variant='h6' className={classes.ptextStyle}>Let us know when you&apos;ve added #civictechindex</Typography>
            </Grid>
            <Grid>
              <Button className={classes.btnStyle}>Added to Civic Tech Index</Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" style={{ padding:'30px' }}>
            <PaperComp text='Add Another Project' btext='Tag Generator' bhref='/tag-generator'/>
            <PaperComp text='Collaborate with us' btext='Learn More' bhref='/support'/>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const HowToUse = () => {
  const classes = useStyles()
  const StepComp =({ stepText,src,alt }) =>{
    return (
      <Grid container >
        <Grid item xs={12} sm={4} md={6} style={{ padding:'8px 0px' }}>
          <Typography variant='h6' className={classes.typoStyle}>{stepText}</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <img className={classes.imgStyle} src={src} alt={alt} />
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Box className='containerGray'>
        <Container className={classes.containerPadding}>
          <Grid container >
            <Grid item xs={12} style={{ padding:'24px 0px' }}>
              <Typography variant='h6' className={classes.typoStyle}> 1. Navigate to your project&apos;s repository in another browser to add your generated tags.</Typography>
            </Grid>
            <StepComp stepText='2. Under your project’s repository, click to paste your tags.' src='/images/step_2.svg' alt='Step 2'/>
            <StepComp stepText='3. Under &quot;Topics&quot;, paste the topic you want to add to your repository.' src='/images/step_3.svg' alt='Step 3'/>
            <StepComp stepText='4. Repeat until you have finished adding all of your tags, then click Save Changes.' src='/images/step_4.svg' alt='Step 4'/>
          </Grid>
        </Container>
        <BottomSection/>
      </Box>
    </>
  )
}

export default HowToUse


