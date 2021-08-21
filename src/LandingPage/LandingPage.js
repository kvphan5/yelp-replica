import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo192.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/Searchbar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router';

export function LandingPage(){
    const {history} = useReactRouter();
    
    function search(term,location){
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }
    
    return(
        <div>
            <TopNav />
                <div className={styles['search-area']}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <SearchBar search={search}/>
                    <SearchSuggestions />
                </div>
        </div>
        
    );
}