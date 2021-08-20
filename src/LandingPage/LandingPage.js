import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo192.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/Searchbar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';

export function LandingPage(){
    return(
        <div>
        <TopNav />
                <div className={styles['search-area']}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <SearchBar />
                    <SearchSuggestions />
                </div>
        </div>
        
    );
}