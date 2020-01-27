import React from 'react';

const charComponent = (props) => {
    return(
        <div style={props.style}>
            <p>{props.char}</p>
        </div>
    )
}

export default charComponent;