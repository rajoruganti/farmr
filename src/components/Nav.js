import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,Button
   } from 'reactstrap';
  import { Link } from 'react-router';
  import { login, logout, isLoggedIn, getName } from '../utils/AuthService';
  import '../App.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const name = getName();
    return (
      <div>
        <Navbar color="info" light expand="md" >
          <NavbarBrand className="" href="/">Start</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="h3" href="/components/">About</Link>
            </NavItem>
              <NavItem>



                   {
                     (isLoggedIn()) ?
                     ( <div><Link>{name}</Link><Button className="h3 btn btn-primary" onClick={() => logout()}>Log out </Button></div> ) :
                     ( <Button onClick={() => login()}>Log In</Button> )
                   }

              </NavItem>

            </Nav>
        </Navbar>
      </div>
    );
  }
}
