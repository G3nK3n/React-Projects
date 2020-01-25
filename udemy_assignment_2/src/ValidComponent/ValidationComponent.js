import React from 'react';

const validationComp = (props) => {

    if(props.thelength >= 5) {
        return (
            <div>  
                <p>Length is good!</p>
            </div>
        )
    }
    else{
        return (
            <div>  
                <p>Length is short!</p>
            </div>
        )
    }
    
}

export default validationComp;