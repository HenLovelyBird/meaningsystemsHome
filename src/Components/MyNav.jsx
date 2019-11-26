import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';
import {Button} from 'react-bootstrap';

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Meaning.Systems</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="eugenio@meaning.systems">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Hey
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  I 
                </DropdownItem>
                <DropdownItem>
                  Love
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Heni
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Input className="ml-5 mr-2" type="text" 
          onChange={(input) => 
          props.changeSearch(input.target.value)} 
          placeholder="Search here!"></Input>
          <Button variant="success">Search</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default MyNav;