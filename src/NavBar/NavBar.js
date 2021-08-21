import React from 'react';
import logo from '../assets/logo192.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/Searchbar';

export function NavBar(){
    return (
       <div className={styles['nav-bar']}>
           <img className={styles.logo} src={logo} alt="Logo" />
           <SearchBar small/>
           <button className={`button ${styles[`nav-button`]}`}>Sign In</button>
           <button className={`button ${styles[`nav-button`]}`}>Register</button>
       </div>
    );
}