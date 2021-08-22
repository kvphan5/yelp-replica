import React, {useState} from 'react';
import styles from './Searchbar.module.css';

export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    const sizeClass = props.small ? '' : 'is-medium';

    function submit(e){
        if(typeof props.search === 'function'){
            props.search(term,location)
        }
        console.log(term,location);
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div className='field has-addons is-marginless'>
                <div className="control">
                    <div className={`button is-info ${sizeClass}`}>
                    Search
                    </div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} 
                        onChange={(e) => setTerm(e.target.value)}
                        type="text" 
                        placeholder="Food"   
                        value={term}
                    />
                </p>
                <div className="control">
                    <div className={`button is-info ${sizeClass}`}>
                    Near
                    </div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} 
                        onChange={(e) => setLocation(e.target.value)}
                        type="text" 
                        placeholder="Where"
                        value={location}
                    />
                </p>
                <p className={`button ${sizeClass} is-success`} onClick={submit}>
                    <span className="icon is-small">
                        <i className="fas fa-search"></i>
                    </span>
                </p>
            </div>
        </form>
    );
}