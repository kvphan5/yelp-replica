import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo192.png';
import styles from './LandingPage.module.css';

export function LandingPage(){
    return(
        <div>
            <TopNav />
            <img src={logo} alt="Logo" className={styles.logo}/>
        </div>
    );
}