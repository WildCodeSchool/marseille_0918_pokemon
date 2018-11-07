import React, { Component } from 'react'
import PokeList from './Pokelist';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import './Pokedex2.css';
import Title from './Title';
import './Title.css';

export default class Pokedex2 extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ''
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="background-pok">
        <Title />
        <div className="my-poki">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView pokemon={this.state.pokemon} />
        </div>
      </div>
    )
  }
}
