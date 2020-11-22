import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  mainContainer: {
    backgroundColor: "#004364",
    fontFamily: "Work Sans",
    paddingBottom:'90px'
  },
  navContainer: {
    paddingLeft: "150px",
  },
  searchContainer:{
    paddingLeft:'150px'
  },

  faqContainer:{
    backgroundColor:'#F2F2F2',
  },

  faqHeading:{
    paddingLeft:'150px'
  },

  getStartedContainer: {
  backgroundColor: theme.backgroundColor1,
},
getStartedHeading: {
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#042D5F",
  textAlign: "center",
  margin: "32px auto 16px auto",
},
getStartedBtn: {
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: theme.button1TextColor,
  border: `1px solid ${theme.button1BG}`,
  backgroundColor: theme.button1BG,
  borderRadius: "22.5px",
  width: "200px",
  height: "45px",
  outline: "none",
  cursor: "pointer",
  margin: "auto",
  marginBottom: "40px",
},
}))

export default useStyles