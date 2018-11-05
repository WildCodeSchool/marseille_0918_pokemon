import React from 'react';
import './DetailView.css';

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type1, type2, weight, ability1, ability2 } = pokemon;
    
  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite" />
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Type: {type1} / {type2}</p>
        <p className="data-char">Weight: {weight}</p>
        <p className="data-char">Abilities: {ability1} / {ability2}</p>

      </div>
    </section>
  )
}

export default DetailView;