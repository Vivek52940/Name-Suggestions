import React from 'react';
import './SearchBox.css';

const SearchBox  = ({onInputchange}) => {
   return (
       <div className="search-container">
           <input 
               onChange={ (e) => onInputchange(e.target.value)} 
               placeholder="type keywords" 
               className="search-input" 
               
            />
       </div>
   )
}

export default SearchBox;