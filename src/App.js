import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import SearchCard from './SearchCard';
import Home from './Home';
import Pokedex2 from './Pokedex2';
import './App.css';
import FooterR from './FooterR';

class App extends Component {

    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="wall"></div>

                    <div className="nav-app">
                        <NavLink exact to="/" onClick="refreshPage()" activeClassName="selected"><img className="Home" alt="Home" title="Home" src="https://lh3.googleusercontent.com/sIR6wAL87qiTAHIAMTR9hC_YaHE0TvZZXENCynRAjJx4XXImn6wqFY58Hwhk-5FVh_s=w300" /></NavLink>
                        <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img className="Pokedex" alt="Pokedex" title="Pokedex" src="https://i0.wp.com/img.appswinc.com/v3/33/com.devgear.pokedex.jpg" /></NavLink>
                        <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img className="Indexpok" alt="Pokicard" title="Pokicard" src="http://image.noelshack.com/fichiers/2018/45/2/1541514221-carte-lel.png" /></NavLink>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/attrapes-les-tous" component={Pokedex2} />
                        <Route path="/trouve-ton-pokemon" component={SearchCard} />
                    </Switch>
                    
                    <FooterR />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;