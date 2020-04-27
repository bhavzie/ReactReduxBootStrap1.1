import React, { Component } from 'react';

import {Navbar, Nav} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Posts</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}
