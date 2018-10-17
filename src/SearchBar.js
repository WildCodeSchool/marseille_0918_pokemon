import React, { Component,} from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';

 class SearchBar extends Component {
  render() {
    return (
      <div className="divflex">

               <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Recherche Pokémon"
                  onChange={(e) => this.props.getSearch(e.target.value)}
                />
              </FormGroup>{' '}
              <Button 
              onClick={() => this.props.runRequest()}
              type="submit">Search</Button>
      </div>
    )
  }
}
export default SearchBar;
