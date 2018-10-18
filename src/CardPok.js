import React, { Component } from 'react';

class CardPok extends Component {
  render() {
    return (
      <div>
        {
          this.props.CardPok.map((pokemon)=>{
            return(<li>{pokemon.name}</li>)
         }
          )
        }
      </div>
    );
  }
}

export default CardPok ;

