import React from 'react';
import {Link} from 'react-router-dom';
import './styles/navbar.css';
const Navbar = () => {
    return ( 
<div>
<ul className="nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allAnimals">All Animals</Link></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contactus">Contact Us</a></li>

</ul>
</div>
     );
}
 
export default Navbar;