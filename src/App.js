import React, { Component } from 'react';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import SearchCard from './SearchCard';
import Home from './Home';
import Pokedex2 from './Pokedex2';
import './App.css';
<<<<<<< HEAD
import IndexPok from './IndexPok';
import Fetchapi from './Component/Fetchapi';
import ApiCard from './Component/ApiCard';
import CardPok from './CardPok';
import Fab from './Fab';
import Footer from './Footer';

const pokemonAffiche = {
  name: "Bulbasaur",
  imageUrl: "https://images.pokemontcg.io/base1/44.png"

};
=======
>>>>>>> c7ff077736090cea7d1ad95a4facc659e93f081f

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <div className="wall" />
                    <div className="nav-app">
                        <NavLink exact to="/bienvenue" activeClassName="selected">Home</NavLink>
                        <NavLink exact to="/attrapes-les-tous" activeClassName="selected">Pokedex</NavLink>
                        <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected">IndexPok</NavLink>
                    </div>

                    <Switch>
                        <Route exact path="/bienvenue" component={Home} />
                        <Route path="/attrapes-les-tous" component={Pokedex2} />
                        <Route path="/trouve-ton-pokemon" component={SearchCard} />

<<<<<<< HEAD

  render() {
    return (
      <div className="background App">
      <Fab/>
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="title"></img>
          <IndexPok setPokemon = {(pokemon) => this.setPokemon(pokemon)} />
          <Fetchapi/>
          <ApiCard/>
          <CardPok pokicard = {this.state.pokicard} />
          
          <Footer/>
      </div>
    );
  }
=======
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
>>>>>>> c7ff077736090cea7d1ad95a4facc659e93f081f
}
export default App;