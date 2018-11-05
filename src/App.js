import React, { Component } from 'react';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import SearchCard from './SearchCard';
import Home from './Home';
import Pokedex2 from './Pokedex2';
import './App.css';


class App extends Component {

    refreshPage(){
        window.location.reload();
    } 

    render() {
        return(
            <BrowserRouter>
                <div>
                    <div className="wall" />
                    
                    <div className="nav-app">
                        <NavLink exact to="/"  onClick="refreshPage()" activeClassName="selected"><img className="Home" src="https://image.flaticon.com/icons/svg/188/188922.svg" /></NavLink>
                        <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img className="Pokedex" src="https://image.flaticon.com/icons/svg/188/188965.svg" /></NavLink>
                        <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img className="Indexpok" src="https://image.flaticon.com/icons/svg/188/188937.svg" /></NavLink>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/attrapes-les-tous" component={Pokedex2} />
                        <Route path="/trouve-ton-pokemon" component={SearchCard} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;