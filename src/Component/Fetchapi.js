import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap';

export default class Fetchapi extends Component {
   constructor(props){
       super(props)
       this.state = {
         loading: true,  
         poke: null
       }
    }
     async componentWillMount() {
         const url = "https://pokeapi.co/api/v2/pokemon/";
         const response = await fetch(url);
         const data = await response.json();
         this.setState({poke: data.results[0] });
      console.log(data);

      this.props.setPokemonPoke(data.results[0])
      }
      getSearch(searchValue){
         this.setState({searchItem:searchValue})
      }
      runRequest(){
        this.searchPokemonPoke(this.state.searchItem)
      }
        
   render() {
    return (
      <div>
        <FormGroup>

        </FormGroup>
        
       <h1>{this.state.loading}</h1> 
      </div>
    )
  }
}


