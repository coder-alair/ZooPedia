import React from 'react';
import Navbar from './navbar';
import Featured from './featured';
import About from './About';
import ContactUs from './contactUs';
import './styles/home.css';
const Home = () => {
    return (
        <div>
            <Navbar />
            <img src='images/bg.jpg' className="headImage" alt="headImage"/>
            <Featured />
            <About />
            <img src='images/about.jpg' className="aboutImage" alt="aboutImage"/>
            <ContactUs />
        </div>
    );
}

export default Home;