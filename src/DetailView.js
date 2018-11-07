import React from 'react';
import './DetailView.css';

const DetailView = ({ pokemon }) => {
  const { name, sprite, type1, weight, ability1} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite" />
      <div className='data-wrapper'>
        <h1 className='data-name'>Name: {name}</h1>
        <p className="data-char">Type: {type1}</p>
        <p className="data-char">Weight: {weight}</p>
        <p className="data-char">Abilities: {ability1}</p>

      </div>
    </section>
  )
}
export default DetailView;