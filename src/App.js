import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';

class App extends Component {
  render() {
    return (
      <div className="background App">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="title"></img>
          <IndexPok />
          <Fetchapi/>
          <ApiCard/>
      </div>
    );
  }
}

export default App;
