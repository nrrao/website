import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.backgroundColor2,
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    boxSizing: "border-box",
    width: "100%",
    //minHeight: "520px",
    //height: "auto",
    display:'flex',
    flexDirection:'column',
  },
  headingContainer: {
    width:"auto",
    height:"24px",
    marginTop:"32px",
    marginLeft:"16px",
    marginRight:"16px",
  },
  url: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "24px",
  },
  subHeadingContainer:{
    width:"auto",
    height:"60px",
    marginTop: "12px",
    marginRight: "72px",
    marginBottom: "0px",
    marginLeft: "72px",

  },
  subHeading: {
    fontFamily: theme.secondaryFontFamily,
    color: theme.primaryTextColor,
    fontSize: "22px",
    fontWeight: "bold",
    textAlign:'center',
    margin: 0,
  },
  heading: {
    //fontSize: "16px",
    fontWeight: "bold",
    //lineHeight: "42px",
    textAlign:'center',
    margin: 0,
  },
  info:{
    width:"auto",
    height:"88px",
    marginTop: "28px",
    marginRight: "16px",
    marginBottom: "38px",
    marginLeft: "16px",
  },
  infoPara:{
    width:"328px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    width:"auto",
    marginRight: "16px",
    marginLeft: "16px",
    //marginBottom: "155px",
  },
  question:{
    width:"328px",
    height:"44px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign:'left',
},
radioDiv:{
  marginTop: "24px",
  display:'flex',
    flexDirection:'row',
},
first: {
  
  height:"24px",
  width:"24px",
  marginRight:"15px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"24px",
  width:"24px",
  marginLeft: "107px",
  marginRight:"15px",
},
projectOrg:{
  marginRight: "16px",
  marginLeft: "16px",
},


projectInfo: {
  marginRight: "16px",
  marginLeft: "16px",
  
},

pStyle: {
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "28px",
  border:'none',
},
textBox: {
  width: "328px",
  height: "54px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  marginBottom:"23px"
},
buttonDiv:{
  marginLeft:"59px",
  marginRight:"59px"
  },

generateButton: {
  height: "38px",
  width: "242px",
  backgroundColor: theme.button1BG,
  borderRadius: "22.5px",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: theme.button2BG,
  marginTop: "14px",
  marginBottom:"12px"
},
resetButton: {
  height: "38px",
  width: "121px",
  backgroundColor: 'white',
  borderTopLeftRadius: "22.5px",
  borderBottomLeftRadius: "22.5px",
  borderColor:'#979797',
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: '#979797',
  marginBottom:"30px"
},
resetFormButton: {
  height: "38px",
  width: "121px",
  backgroundColor: 'white',
  borderTopRightRadius: "22.5px",
  borderBottomRightRadius: "22.5px",
  borderColor:'#979797',
  borderLeft:'none',
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: '#979797',
  marginLeft:"0px",
  marginBottom:"30px"
},
hideButton:{
  visibility:"hidden",
},
tagDivMain:{
  marginLeft: "16px",
  marginRight: "16px",
  
},
tagUl:{
  listStyle: 'none',
  display:'flex',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'spaceEvenly',
  padding:'0px',
  margin:'0px', 
},


tagLi:{
  width: 'auto',
  height: '44px',
  background: '#D7D7D7',
  // marginTop: "24px",
  // marginLeft: "5px",
  // marginRight: "59px",
  // marginBottom:"33px",
  margin:'10px',
  textAlign:'center',
  paddingTop:'12px',
  paddingBottom:'12px',
  paddingLeft:'10px',
  paddingRight:'10px',
},
topicDiv:{
display:'flex',
flexDirection:'row',
},
topicBox: {
  width: "283px",
  height: "54px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  marginBottom:"10px"
},
plusButton: {
 border:'none'
},
newTagLi:{
  width: '161px',
  height: '44px',
  background: 'white',
  margin:'10px',
  textAlign:'center',
  paddingTop:'12px',
  paddingBottom:'12px',
  paddingLeft:'10px',
  paddingRight:'10px',
},
copyImg: {
  paddingTop:'20px',
  paddingBottom:'12px',
  paddingLeft:'10px',
  paddingRight:'10px',
  height: "44px",
  width: "44px",
  //margin:'10px',
},
flexItem:{
  width: '328.6px',
  height: 'auto',
  background: '#FFFFFF',
  borderRadius: "12px",
  //marginTop: "24px",

},

pHeading:{
  width: "269px",
  height: "auto",
  fontSize: "24px",
  lineHeight: "30px",
  outline:'none',
  border:"none",
  textAlign:'center',
  paddingTop: "24px",
  marginLeft: "29.8px",
  marginRight: "29.8px",
  padingBottom:"20px",
  fontWeight: "bold",
},

pTag:{
  width: "286.6px",
  height: "auto",
  textAlign:'center',
  marginLeft: "20px",
  marginRight: "20px",
  paddingBottom:"18px",
},
amButtonDiv:{
  marginLeft: "43.3px",
  marginRight: "43.3px",
  marginBottom:"24px",
},

bottomDiv:{
  marginBottom:'155px'
},

hideBottomDiv:{
  visibility:"hidden",
},

adButtonDiv: {
  marginLeft:"150px",
  borderColor:"red"
},



'@media only screen and (min-width: 768px)': {

  headingContainer: {
    width:"494px",
    height:"24px",
    marginTop:"73px",
    marginLeft:"53px",
    marginRight:"53px",
  },
  subHeadingContainer:{
    width:"494px",
    height:"71px",
    marginTop: "42px",
    marginRight: "53px",
    marginBottom: "0px",
    marginLeft: "53px",

  },

  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "45px",
    textAlign:'center',
    
  },

  info:{
    width:"auto",
    height:"36px",
    marginTop: "16px",
    marginRight: "52px",
    marginBottom: "42px",
    marginLeft: "53px",
  },
  infoPara:{
    width:"495px",
    //height:"69px",
    fontWeight:"500",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    display:'flex',
    flexDirection:'row',
    width:"auto",
    marginRight: "53px",
    marginLeft: "52px",
    marginBottom: "33px",
  },
  question:{
    width:"304px",
    height:"40px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign:'left',
},
radioDiv:{
  margin: "0px",
  
},
first: {
  
  height:"12px",
  width:"12px",
  marginLeft:"31px",
  marginRight:"34px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"12px",
  width:"12px",
  marginLeft: "34px",
  marginRight:"15px",
},
projectOrg:{
  marginRight: "52px",
  marginLeft: "52px",
},

projectInfo: {
  display:'flex',
  flexDirection:'column',
  width:"auto",
  marginRight: "52px",
  marginLeft: "52px",
  
},
pStyle: {
  width: "398px",
  height:"20px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "20px",
  border:'none',
},
textBox: {
  width: "496px",
  height: "52px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  
},

generateButton: {
  height: "38px",
  width: "242px",
  marginTop: "33px",
  marginLeft: "179px",
  marginRight: "179px",
  marginBottom:"32px"
},
},

'@media only screen and (min-width: 992px)': {

  adButtonDiv: {
    marginLeft:"150px",
    borderColor:"red"
  },

  headingContainer: {
    width:"495px",
    height:"24px",
    marginTop:"68px",
    marginLeft:"190px",
  },
  subHeadingContainer:{
    width:"880px",
    height:"96px",
    marginTop: "39px",
    marginRight: "280px",
    marginBottom: "0px",
    marginLeft: "280px",

  },
  subHeading: {
    fontSize: "26px",
    fontWeight: "bold",
    textAlign:'center',
    
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "45px",
    textAlign:'center',
    
  },
  info:{
    width:"auto",
    height:"69px",
    marginTop: "16px",
    marginRight: "280px",
    marginBottom: "42px",
    marginLeft: "280px",
  },
  infoPara:{
    width:"880px",
    //height:"69px",
    fontWeight:"500",
    fontSize: "22px",
    lineHeight: "28px",
    textAlign:'center',
    margin:"0"
  },
  projectSection: {
    display:'flex',
    flexDirection:'row',
    width:"auto",
    marginRight: "280px",
    marginLeft: "280px",
    marginBottom: "64px",
  },
  question:{
    width:"610px",
    height:"28px",
    margin:"0px",
    fontWeight:"500",
    fontSize: "22px",
    lineHeight: "28px",
    textAlign:'left',
},
radioDiv:{
  margin: "0px",
},
first: {
  
  height:"24px",
  width:"24px",
  marginRight:"15px",

},

lableYes:{
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "14px",
  textAlign:"center"
},
second: {
  height:"24px",
  width:"24px",
  marginLeft: "107px",
  marginRight:"15px",
},
projectOrg: {
  marginRight: "280px",
  marginLeft: "280px",
},
projectInfo: {
  marginRight: "280px",
  marginLeft: "280px",
},
pStyle: {
  width: "732px",
  height: "28px",
  fontWeight: "500",
  fontSize: "22px",
  lineHeight: "28px",
  border:'none',
},
textBox: {
  width: "880px",
  height: "52px",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  
},
 buttonDiv:{
   margin:0,
 },
  
generateButton: {
  height: "45px",
  width: "270px",
  fontSize: "16px",
  marginTop: "42px",
  marginLeft: "434px",
  marginRight: "32px",
  marginBottom:"64px"
},

tagUl:{
  listStyle: 'none',
  display:'flex',
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'spaceEvenly',
  padding:'0px',
  margin:'0px', 
},

tagLi:{
  width: '163px',
  height: '44px',
  background: '#D7D7D7',
  margin:'10px',
  textAlign:'center',
  paddingTop:'12px',
  paddingBottom:'12px',
  paddingLeft:'10px',
  paddingRight:'10px',
},

topicBox: {
  width: "810px",
  height: "52px",
  fontWeight:"500",
  fontSize: "16px",
  lineHeight: "19px",
  paddingLeft: "14px",
  outline:'none',
  border:"none",
  marginBottom:"16px"
},

tagDivMain:{
  marginLeft: "280px",
  marginRight: "280px",
  
},

newTagLi:{
  width: '163px',
  marginRight:0,
},

copyImg: {
  marginRight:"8px",
},

}

}));

export default useStyles;
