import React from 'react';
import './User.css';

const mystyle = {
    //JSX style of using styles.
    padding: "10px"
};

const theOutput = (props) => {
    return (
        <div style={mystyle} className="OutputClass">
            <p onClick={props.click}>The username is: {props.username}</p>
            <p>Some random text</p>
        </div>
    )
};

export default theOutput;