import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  MenuItem
} from 'react-bootstrap';

export default class FotNav extends Component {
  constructor(props) {
    super(props);
  }
  stateLogin(){
    if(this.props.user === null){
      return <NavItem eventKey={1}>Вход</NavItem>
    }
    else{
      return <NavDropdown eventKey={2} title={this.props.user.name} id = 'id-user'>
        <MenuItem eventKey={2.1}>Настройки</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={2.2}>Выход</MenuItem>
      </NavDropdown>
    }
  }
  handleSelectMenu(selectedKey){
    console.log(selectedKey);
    switch (selectedKey) {
      case 1:
        console.log('Login..');
        this.props.userLogin('bavc', '904');
        break;
      case 2.1:
        console.log('Setting');
        break;
      case 2.2:
        this.props.userExit(null);
        break;
      default:
    }
  }
  render(){
    return <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Fot - online</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight onSelect = {this.handleSelectMenu.bind(this)}>
        {this.stateLogin()}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  }
}
