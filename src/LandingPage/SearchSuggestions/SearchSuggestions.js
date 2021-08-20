import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions(){
    return (
        <div className={styles.suggestions}>
           <div>
                <span className="icon is-small">
                    <i className="fas fa-utensils"></i>
                </span>
                <span className={styles.suggestion}>
                    Restaurants
                </span>
           </div>
           <div>
                <span className="icon is-small">
                    <i className="fas fa-cocktail"></i>
                </span>
                <span className={styles.suggestion}>
                    Nightlife
                </span>
           </div>
           <div>
                <span className="icon is-small">
                    <i className="fas fa-concierge-bell"></i>
                </span>
                <span className={styles.suggestion}>
                    Services
                </span>
           </div>
           <div>
                <span className="icon is-small">
                    <i className="fas fa-carrot"></i>
                </span>
                <span className={styles.suggestion}>
                    Delivery Service
                </span>
           </div>
        </div>
    );
}