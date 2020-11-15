import React from 'react';
import Img1 from '../../../../project-image1.jpg';
import Img2 from '../../../../project-image2.jpg';
import Img3 from '../../../../project-image3.jpg';
import Img4 from '../../../../project-image4.jpg';



import classes from '../FeaturedProject/FeaturedProject.module.css';

const features = () => (
    <div className={classes.Featured}>
        <div className={classes.InnerDiv}>        
            <h3>Featured Project</h3>
        </div>
        <ul>
            <li>
                <img src={Img1} />
            </li>
            <li>
                <img src={Img2} />
            </li>
            <li>
                <img src={Img3} />
            </li>
            <li>
                <img src={Img4} />
            </li>
        </ul>
    </div>
)

export default features;