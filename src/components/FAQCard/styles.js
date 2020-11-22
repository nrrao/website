import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  root: {
    width: '60%',
    //maxWidth: 260,
    
    fontFamily: 'Work Sans',
    margin:'auto'
},
questionText: {
  paddingLeft: '24px',
  paddingRight: '33px',
  color: '#0F1D2F',
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: "600",
  margin:'0'
},
  answerText: {
    paddingLeft: '24px',
    paddingRight: '33px',
    color: '#0F1D2F',
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
},
}));

export default useStyles;