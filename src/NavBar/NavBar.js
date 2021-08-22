import React from 'react';
import logo from '../assets/logo192.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/Searchbar';
import { Link } from 'react-router-dom';

export function NavBar(props){
    return (
       <div className={styles['nav-bar']}>
           <Link to='/'><img className={styles.logo} src={logo} alt="Logo" /></Link>
           <SearchBar small term={props.term} location={props.location}/>
           <button className={`button ${styles[`nav-button`]}`}>Sign In</button>
           <button className={`button ${styles[`nav-button`]}`}>Register</button>
       </div>
    );
}