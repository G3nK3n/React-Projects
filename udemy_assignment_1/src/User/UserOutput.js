import React from 'react';

const theOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>The username is: {props.username}</p>
            <p>New name: </p>
        </div>
    )
};

export default theOutput;