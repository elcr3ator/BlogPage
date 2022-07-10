import React from 'react'

import { Header, Price, AboutUs, Review, ContactUs} from './container';
import {NavBar, Footer} from './components';
import './App.css';

const App = () => (
    <div>
        <NavBar /> 
        <Header />
        <Price />    
        <AboutUs />    
        <Review />    
        <ContactUs />     
        <Footer />         
    </div>
);

export default App