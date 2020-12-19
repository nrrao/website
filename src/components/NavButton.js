import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD


const blueVariant = {
    fontFamily: 'Work Sans, san-serif',
    fontWeight: '700',
    padding:'16px',
    backgroundColor: '#0CB2E7',
=======
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyles: {
    fontFamily: 'Work Sans, san-serif',
    fontWeight: '700',
    padding:'16px',
>>>>>>> upstream-main
    height: '48px',
    width: '256px',
    color: 'white',
    border: 'none',
    borderRadius: '24px',
    boxShadow: '4px 4px 12px 4px rgba(4, 45, 95, 0.08)'
<<<<<<< HEAD
}

const defaultVariant = {
    fontFamily: 'Work Sans, san-serif',
    fontWeight: '700',
    padding:'16px',
    backgroundColor: '#FEFEFE',
    width: '256px',
    height: '48px',
    color: '#6D6E74',
    border: 'none',
    borderRadius: '24px',
    boxShadow: '4px 4px 12px 4px rgba(4, 45, 95, 0.08)'
}

/**
 */
export default function NavButton(props) {
    return (
        <>
            <Link to={props.href}>
                <button style={props.variant === 'blue' ? blueVariant : defaultVariant}>
=======
    },
    
  });

  /**
   * button color
   * @param {*} props.variant
   */

export default function NavButton(props) {
    const classes = useStyles();
    return (
        <>
            <Link to={props.href}>
                <button className={classes.buttonStyles} style={props.variant === 'blue' ? {backgroundColor: '#0CB2E7'} : {backgroundColor: '#FEFEFE',color: '#6D6E74'}}>
>>>>>>> upstream-main
                    {props.children}
                </button>
            </Link>
        </>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> upstream-main
