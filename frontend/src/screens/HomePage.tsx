import React from 'react';
import Navbar from '../components/headers/Headers';
import LogoAndField from '../assets/image/LogoAndField.png'
import './HomePage.css';
import Card from '../components/card/Card';
import Hoori from '../components/presentation/Hoori';
import FaqCard from '../components/faqCard/FaqCard';
import Footer from '../components/footer/Footer';

export default function HomePage() {
    return (
        <div className="has-background-white">
            <Navbar />
            <img src={LogoAndField} id='Field' className='LogoOnField' alt='field'/>
            <Card/>
            {/*<Hoori /> 
            <FaqCard />
    <Footer />*/}
        </div>
    );

};