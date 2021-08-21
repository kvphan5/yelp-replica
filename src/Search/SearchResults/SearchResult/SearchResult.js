import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css'


export function SearchResult(){
    return (
        <div className={styles['search-result']}>
           <img src="https://via.placeholder.com/150" alt="Img" className={styles['business-image']}/>
           <div className={styles['business-info']}>
                <h2 className="subtitle">
                    Burger Place
                </h2>
                <BusinessRating />
                <p>
                    $$&nbsp;
                    <span className="tag is-primary">Info</span>
                    &nbsp;
                    <span className="tag is-info">Info</span>
                </p>
           </div>
           <div className={styles['contact-info']}>
               <p>+123456790</p>
               <p>Street nowhere</p>
               <p>Zipcode</p>
           </div>
        </div>
    );
}