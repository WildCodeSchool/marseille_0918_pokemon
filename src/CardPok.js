import React, { Component } from 'react'
import './CardPok.css';


export default class CardPok extends Component {
  render() {
    return (
      <div>
        {
          this.props.pokicard &&
          <div className="Pokemoncard">
            <img className="zoom" src={this.props.pokicard.imageUrl} alt="card" />
          </div>
        }
      </div>
    )
  }
}
