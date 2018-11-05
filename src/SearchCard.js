import React, { Component } from 'react';
//import logo from './logo.svg';
import './SearchCard.css';
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';
import CardPok from './CardPok';
//  


const pokemonAffiche = {
  name: " ",
  imageUrl: "https://orig00.deviantart.net/0a57/f/2018/167/0/3/pikachu_waving_gif_by_johnkroozie-dcejpi1.gif"

};

class SearchCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokicard : pokemonAffiche,
      
    };
  }

  setPokemon(pokemon){
    this.setState({pokicard: pokemon})
  }


  render() {
    return (
      <div className="background-App">
        
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="title"></img>
          <IndexPok setPokemon = {(pokemon) => this.setPokemon(pokemon)} />
          <Fetchapi/>
          <ApiCard/>
          <CardPok pokicard = {this.state.pokicard} />
        
      </div>
    );
  }
}

export default SearchCard;
