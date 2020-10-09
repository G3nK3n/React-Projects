import React from 'react';

const links = props => {
    const linkName = ['Home', 'About', 'Collection', 'Blog', 'Store Locator'];

    const linksItems = linkName.map((link) => 
        <li>
            <a href={link.toString()}>{link}</a>
        </li>
    );

    return (
        <ul>{linksItems}</ul>
    );
};

export default links;


