import React from 'react';
import './NameCard.css';

const namecheapUrl = "https://www.namecheap.com/domains/registration/results/?domain="

const NameCard = ({suggestions}) => {
    return (
        <a 
        target="_blank" 
        rel="noreferrer"
        className="card-link" href={`${namecheapUrl}${suggestions}`}>
        <div className="result-name-card">
            <p className="result-name">
              {suggestions}
            </p>
        </div>
        </a>
    );

}

export default NameCard;

