import React, { Component } from 'react'
import PokeList from './Pokelist';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import './Pokedex2.css';

export default class Pokedex2 extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ''
    };

    this.handleOnClick = this.handleOnClick.bind (this); 
  }

   handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState ({pokemon});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <div className="App">

         <div className="Pokedex" >
         </div>
       </div>
=======
      <div className="background-pok">
        <div className="my-poki"> 
          <PokeList handleOnClick = {this.handleOnClick}/>
          <DetailView pokemon = {this.state.pokemon}/>
          

        </div>        
>>>>>>> 00a071de97764122b84c08a15e112c61a49dc207
      </div>
    )
  }
}
