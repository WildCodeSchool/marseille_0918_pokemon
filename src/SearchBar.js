import React, { Component,} from 'react'
import { Navbar,FormGroup,FormControl,Button,} from 'react-bootstrap';
 class SearchBar extends Component {
  render() {
    return (
        <div>
      <Navbar>
      <Navbar.Header>        
        
      </Navbar.Header>
      
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      
    </Navbar>
    </div>
    );
}
}
export default SearchBar;
