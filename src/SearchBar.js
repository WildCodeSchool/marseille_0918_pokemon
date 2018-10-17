import React, { Component,} from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';

 class SearchBar extends Component {
  render() {
    return (
      <div className="divflex">

               <FormGroup>
                <FormControl type="text" placeholder="Recherche Pokémon" />
              </FormGroup>{' '}
              <input >
              </input>
              <Button type="submit" onClick={() => ()}>Submit</Button>
      </div>
    )
  }
}
export default SearchBar;
