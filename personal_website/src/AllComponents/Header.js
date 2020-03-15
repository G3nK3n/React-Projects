import React from 'react';
import '../App.css';

const headerComponent = () => {
    return(
        <div className="header">
            <a href="#">
                <img className="homeIcon" src="https://i.pinimg.com/236x/da/e0/92/dae092a545e4c09714ee9842ab15dc10.jpg" alt="home_icon" />
            </a>

            <a className="linkDisplay" href="#">About</a>
            <a className="linkDisplay" href="#">Contact</a>
        </div>
    );
}

export default headerComponent;