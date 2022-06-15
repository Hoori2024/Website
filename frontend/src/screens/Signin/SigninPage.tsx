import React from 'react';
import Navbar from '../../components/headers/Headers';
import './SigninPage.css';
import './SigninPage.sass';
import LoginFooter from '../../components/loginFooter/LoginFooter';
import LoginCard from '../../components/loginCard/LoginCard';

export default function SigninPage() {
    return (
        <div className="has-background-white">
            <Navbar />
            <div className='container'></div>
            <div className='SigninBody'>
                <LoginCard />
            </div>
            <LoginFooter />
        </div>
    );

};