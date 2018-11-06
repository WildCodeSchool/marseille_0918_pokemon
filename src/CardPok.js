import React, { Component } from 'react'
import './CardPok.css';


export default class CardPok extends Component {
  render() {
    return (
      <div>
          {
            this.props.pokicard && 
            <div className="Pokemoncard">
              <h3>{this.props.pokicard.name}</h3>
              <img className="zoom" src={this.props.pokicard.imageUrl} alt= "picture"/>
            </div>
          }
      </div>
    )
  }
}
