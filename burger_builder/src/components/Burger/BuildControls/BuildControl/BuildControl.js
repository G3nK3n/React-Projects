import React from 'react';
import classes from './BuildControl.css'

const buildControl = props => (
    <div className={classes.buildControl}> 
        <div className={classes.Label}>{props.ingredientsLabel}</div>
        <button className={classes.Less}>More</button>
        <button className={classes.More}>Less</button>
    </div>
);

export default buildControl;