import React from 'react';
import topImage from '../../Edited.jpg';
import Pic1 from '../../SmallPic.jpg';
import Pic2 from '../../SmallPic2.jpg';
import Pic3 from '../../SmallPic3.jpg';
import Pic4 from '../../SmallPic4.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from '../About/About.module.css';

const about = () => (
    <div>
        <Container className={classes.About}>
            <div className={classes.ImageContainer}>
                <img src={topImage} />
            </div>
            <h2>About Kenneth Serrano</h2>

            <ul className={classes.SmallImages}>
                <li>
                    <img src={Pic1} />
                    <h3>We have free templates for</h3>
                    <p>
                       Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they're absolutely free!
                       You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms Of Use. 
                       You can even remove all our links if you
                    </p>
                </li>
                <li>
                    <img src={Pic2} />
                    <h3>We have more templates for you</h3>
                    <p>
                        Looking for more templates? Just browse through all our Free Website Templates and ﬁnd what you’re looking for. 
                        But if you don’t ﬁnd any website template you can use, you can try our Free Web Design service and tell us all about it. 
                        Maybe you’re looking for something diferent, something special. And we love the challenge of doing something diferent and something special
                    </p>
                </li>
                <li>
                    <img src={Pic3} />
                    <h3>BE PART OF OUR COMMUNITY</h3>
                    <p>
                        If you're experiencing issues and concerns about this website template, join the discussion On Our Forum and meet other people 
                        in the community who share the same interests with you.
                    </p>
                </li>
                <li>
                    <img src={Pic4} />
                    <h3>TEMPLATE DETAILS</h3>
                    <p>
                        Design version 8 <br />
                        Code version 2 <br /> <br />
                        Website Template details, discussion and updates for this High Fashion Web Template. <br /> <br />
                        Website Template design by Free Website Templates. <br /> <br />
                        Please feel free to remove some or all the text and links of this page and replace it with your own About
                    </p>
                </li>
            </ul>

        </Container>
    </div>
)

export default about;