import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css'


export function SearchResult(props){
    if(!props.business){
        return (<div/>);
    }

    const b = props.business;
    const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>
        {category.title}
    </span>));
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>)

    return (
        <div className={styles['search-result']}>
           <img src={b.image_url} alt="Img" className={styles['business-image']}/>
           <div className={styles['business-info']}>
                <h2 className="subtitle">
                    {b.name}
                </h2>
                <BusinessRating reviewCount={b.review_count} rating={b.rating} />
                <p>
                    {b.price} {tags}
                </p>
           </div>
           <div className={styles['contact-info']}>
               <p>{b.phone}</p>
               {addressLines}
           </div>
        </div>
    );
}