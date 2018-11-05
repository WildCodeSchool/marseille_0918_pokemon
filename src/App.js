import React, { Component } from 'react';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import SearchCard from './SearchCard';
import Home from './Home';
import Pokedex2 from './Pokedex2';
import './App.css';
import FooterAloys from './FooterAloys';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
<<<<<<< HEAD
=======
                    <div className="wall" />
                    <div className="nav-app">
                        <NavLink exact to="/bienvenue" activeClassName="selected"><img className="Home" src="https://image.flaticon.com/icons/svg/188/188922.svg" /></NavLink>
                        <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img className="Pokedex" src="https://image.flaticon.com/icons/svg/188/188965.svg" /></NavLink>
                        <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img className="Indexpok" src="https://image.flaticon.com/icons/svg/188/188937.svg" /></NavLink>
                    </div>
>>>>>>> 00a071de97764122b84c08a15e112c61a49dc207

        <div className="nav-app">

             <NavLink exact to="/" activeClassName="selected"><img className="Home" src="https://image.flaticon.com/icons/svg/188/188922.svg"/></NavLink>

             <NavLink exact to="/attrapes-les-tous" activeClassName="selected"><img className="Pokedex" src="https://icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png"/></NavLink>

             <NavLink exact to="/trouve-ton-pokemon" activeClassName="selected"><img className="Indexpok" src="http://image.noelshack.com/fichiers/2018/43/5/1540557074-carte.png"/></NavLink>
             </div>

          <Switch>
              <Route exact path="/bienvenue" component={Home}/>
              <Route path="/attrapes-les-tous" component={Pokedex2}/>
              <Route path="/trouve-ton-pokemon" component={SearchCard}/>

          </Switch>
          <FooterAloys/>
          </div>
     </BrowserRouter>
     
        );
    }
}
export default App;