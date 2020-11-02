import React from 'react';
import classes from '../ImageHolder/ImageHolder.module.css';


// import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const imageholder = props => (

    <div>
        <ul className={classes.Images}>
            <li>
                <a href="#image1"><img src="https://i.pinimg.com/originals/8b/7c/60/8b7c6010807e8ca181aa3bce08fe369b.jpg"/> </a>
                <Button variant="secondary" size="lg">Large Button</Button>
            </li>
            <li>
                <a href="#image2"><img src="https://www.dhresource.com/0x0s/f2-albu-g5-M01-14-E8-rBVaI1jZI1CAPfXnAALA1L8hTs8078.jpg/new-spring-shirt-dress-women-summer-dress.jpg"/></a>
                <Button variant="secondary" size="lg">Large Button</Button>
            </li>
            <li>
                <a href="#image3"><img src="https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1709/bbtreesubmission170904028/85449438-asian-woman-fashion-model-posing-in-a-studio-as-wearing-black-cocktail-dress-and-fishnet-stockings.jpg"/></a>
                <Button variant="secondary" size="lg">Large Button</Button>
            </li>
            <li>
                <a href="#image4"><img src="https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1709/bbtreesubmission170903643/85449480-asian-woman-fashion-model-posing-in-a-studio-as-wearing-green-gradation-beach-dress.jpg"/></a>
                <Button variant="secondary" size="lg">Large Button</Button>
            </li>
        </ul>
    </div>
)

export default imageholder;