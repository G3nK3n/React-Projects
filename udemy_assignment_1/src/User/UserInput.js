import React from 'react';
import './User.css';

const theInput = (props) => {
    return (
        <div className="InputClass">
            <input type="text" onChange={props.changename}/>
        </div>
    )
};

export default theInput;