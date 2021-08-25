import React from 'react';
import {Link} from 'react-router-dom'

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/stared', text: 'Stared'},

]

const Navs = () => (
    <div>
        <ul>
            {
                LINKS.map(link =>
                    <li key={link.to}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>)
            }
        </ul>
    </div>
);
export default Navs;
