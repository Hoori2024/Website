import React from 'react';
import Navbar from '../../components/headers/Headers';
import './SignupPage.css';
import './SignupPage.sass';
import LoginFooter from '../../components/loginFooter/LoginFooter';
import RegisterCard from '../../components/registerCard/RegisterCard';

export default function SignupPage() {
    return (
        <div className="has-background-white">
            <Navbar />
            <div className='container'></div>
            <div className='SigninBody'>
                <RegisterCard />
            </div>
            <LoginFooter />
        </div>
    );

};