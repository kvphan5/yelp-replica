import React from 'react';
import styles from './Searchbar.module.css';

export function SearchBar(props){
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div className='field has-addons is-marginless'>
            <p className="control">
                <button className={`button is-info ${sizeClass}`}>
                Search
                </button>
            </p>
            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Food"/>
            </p>
            <p className="control">
                <button className={`button is-info ${sizeClass}`}>
                Near
                </button>
            </p>
            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Where"/>
            </p>
            <p className={`button ${sizeClass} is-success`}>
                <span className="icon is-small">
                    <i className="fas fa-search"></i>
                </span>
            </p>
        </div>
    );
}