import React from 'react';
import styles from './Searchbar.module.css';

export function SearchBar(){
    return (
        <div className="field has-addons">
            <div className="control">
                <button className="button is-info is-medium">
                Search
                </button>
            </div>
            <div className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Food"/>
            </div>
            <div className="control">
                <button className="button is-info is-medium">
                Near
                </button>
            </div>
            <div className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where"/>
            </div>
            <div className="button is-medium is-success">
                <span className="icon is-small">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
}