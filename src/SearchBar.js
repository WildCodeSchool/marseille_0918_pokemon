import React, { Component,} from 'react'
import {AutoComplete} from 'primereact/autocomplete';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './App2.css';
import './SearchBar.css';


class SearchBar extends Component {
  state = {
    searchValue: '',
    searchResults: []
  }

  autocompleteSearch(){
    let url = `https://api.pokemontcg.io/v1/cards?setCode=base1&name=${this.state.searchValue}`;
    setTimeout(() => {
      fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({searchResults: response.cards}));
    }, 500)
  }

  setValues(e){
    this.setState({searchValue: e.target.value})
    this.props.getSearch(e.target.value)
  }

  itemTemplate(pokemon) { 
    return ( 
    <div className="p-clearfix"> 
      <img alt={pokemon.name} src={pokemon.imageUrl} 
        style={{ width: '65px', display: 'inline-block', margin: '5px 0 2px 5px' }} 
      /> 
    <div style={{ fontSize: '18px', color: 'cyan' , float: 'right', margin: '10px 10px 0 0' }}>{pokemon.name}</div> </div> ); 
  }

  render() {
    return (
      <div className="divflex p-autocomplete-items">
        <FormGroup>
          <AutoComplete value={this.state.searchValue}
            onSelect={() => this.props.runRequest()}
            inputStyle={{ }}
            suggestions={this.state.searchResults}
            itemTemplate={this.itemTemplate.bind(this)}
            completeMethod={() => this.autocompleteSearch()} field="name"
            size={30} placeholder="Trouve Ton Pokemon" minLength={3} onChange={(e) => this.setValues(e)} 
          />
        </FormGroup>
      </div>
    )
  }
}
export default SearchBar;
