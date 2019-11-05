import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {Math.floor(Math.random() * 30)} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};

export default person;