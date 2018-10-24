import React, { Component } from 'react';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import App2 from './App2';
import Home from './Home';
import Pokedex2 from './Pokedex2';
import './App.css';

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
                        <Route path="/trouve-ton-pokemon" component={App2} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;