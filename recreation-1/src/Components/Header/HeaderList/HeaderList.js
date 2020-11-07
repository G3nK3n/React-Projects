import React from 'react';
//import Container from 'react-bootstrap/Container';

import classes from '../HeaderList/HeaderList.module.css';

const links = props => {
    const linkName = ['Home', 'About', 'Collection', 'Blog', 'Store Locator'];

    const linksItems = linkName.reverse().map((link) => {
        
        return(
            // link.toString() === "Home" ?
            // <div key={link.toString()} className={classes.Links}>
            //     <li className={classes.el}>
            //         <a href={link.toString()}>{link}</a>
            //     </li>
            // </div>
            // :
            // <div key={link.toString()} className={classes.Links}>
            //     <li>
            //         <a href={link.toString()}>{link}</a>
            //     </li>
            // </div>
            

            link.toString() === "Home" ? 
            <li key={link} className={classes.Links}>
                <a onClick={props.clickHome} href="javascript:void(0)">{link}</a>
            </li>
            :
            link.toString() === "About" ?
            <li key={link} className={classes.Links}>
                <a onClick={props.clickAbout} href="javascript:void(0)">{link}</a>
            </li>
            :
            link.toString() === "Store Locator" ?
            <li key={link} className={classes.Links}>
                <a onClick={props.clickStore} href="javascript:void(0)">{link}</a>
            </li>
            :
            link.toString() === "Collection" ?
            <li key={link} className={classes.Links}>
                <a href={link.toString()}>{link}</a>
                <div className={classes.HiddenLink}>
                    <ul>
                        <li>
                            <a href="#woman">Woman</a>
                        </li> 
                        <li>
                            <a href="#men">Men</a>
                        </li>
                    </ul>
                </div>
            </li>
            :
            <li key={link} className={classes.Links}>
                <a href={link.toString()}>{link}</a>
            </li>

            // Keep thisjust in case it does not work out
            // <li key={link} className={classes.Links}>
            //     <a href={link.toString()}>{link}</a>
            // </li>
            
        )
    });

    return(
        
        <div className={classes.Links}>
            <ul>{linksItems}</ul>
        </div>
        
    )
};

export default links;


