import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
    <input className='search' onChange={e => props.onChange(e)} type='search' placeholder={props.placeholder}/>
)

