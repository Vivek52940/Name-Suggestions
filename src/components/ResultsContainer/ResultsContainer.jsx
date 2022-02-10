import React from 'react'
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({suggestions}) => {
  
  const suggestedNames = suggestions.map((suggestions) => {

    return <NameCard key={suggestions} suggestions={suggestions}/>
  
  });

  return (
   <div className="results-container">
     {suggestedNames}
   </div>
  )
}

export default ResultsContainer;