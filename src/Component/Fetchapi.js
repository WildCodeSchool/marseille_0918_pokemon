import React, { Component } from 'react'

export default class Fetchapi extends Component {
   constructor(props){
       super(props)
       this.state = {
         poke: [],
       }
    }

      componentDidMount() {
       fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(response => this.setState({poke :response}))
        
    
      };
    
   render() {
    return (
      <div>
       <h1>{this.state.loading}</h1> 
      </div>
    )
  }
}
