import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    constructor() {
       super();

       this.state = {
          headerText:'Name It!',
          headerExpanded : true,
          suggestions : [],
       };
    }
   
   handleInputChange = (inputText) => {
   
   this.setState({headerExpanded:inputText.length > 0 ? false :true ,
   suggestions : inputText ?  name(inputText) : [],
   });
   }
   render() {
   return (
      <div>
       <Header
        headerExpanded={this.state.headerExpanded}
        headTitle={this.state.headerText}
        />

       <SearchBox onInputchange={this.handleInputChange}/>
       <ResultsContainer suggestions={this.state.suggestions}/>
      </div>
   )
   }
}

export default App;