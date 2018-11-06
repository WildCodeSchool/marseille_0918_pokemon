import React, { Component } from 'react';
//import logo from './logo.svg';
import './SearchCard.css';
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';
import CardPok from './CardPok';
import Title from './Title';
import './Title.css';
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
          <Title />
          <IndexPok setPokemon = {(pokemon) => this.setPokemon(pokemon)} />
          <Fetchapi/>
          <ApiCard/>
          <CardPok pokicard = {this.state.pokicard} />
          <audio controls autoPlay>
    <source src="http://www.dinosoria.com/generiques/dessins_anime/pokemon.mp3" 
    type="audio/mpeg  "></source>
</audio>
      </div>
      
    );
  }
}

export default SearchCard;
