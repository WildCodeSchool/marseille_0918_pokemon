import React, { Component } from 'react'
import './Home.css';
import Title from './Title';
import './Title.css';



export default class Home extends Component {

  render() {
    return (
      <div className="background-home">
        <Title />
        <div className="about"> 
  
          <div className="close">x</div>
          <p>Amusez-vous à capturer des pokémons !</p>
          <br />
          <p>Attrapez les Tous !!</p>
        </div>
        <footer>
          <div className="pokemon-0">
            <input id="poke1" type="checkbox" />
            <label htmlFor="poke1" className="poke-zero" />
          </div>
          <div className="pokemon-2">
            <input id="poke2" type="checkbox" />
            <label htmlFor="poke2" className="poke-two" />
          </div>
          <div className="pokemon-3">
            <input id="poke3" type="checkbox" />
            <label htmlFor="poke3" className="poke-three" />
          </div>
          <div className="pokemon-4">
            <input id="poke4" type="checkbox" />
            <label htmlFor="poke4" className="poke-four" />
          </div>
          <div className="pokemon-5">
            <input id="poke5" type="checkbox" />
            <label htmlFor="poke5" className="poke-five" />
          </div>
          <div className="pokemon-6">
            <input id="poke6" type="checkbox" />
            <label htmlFor="poke6" className="poke-six" />
          </div>
          <div className="pokemon-7">
            <input id="poke7" type="checkbox" />
            <label htmlFor="poke7" className="poke-seven" />
          </div>
          <div className="pokemon-8">
            <input id="poke8" type="checkbox" />
            <label htmlFor="poke8" className="poke-eight" />
          </div>
          
        </footer>

       

      </div>
    )
  }
}
