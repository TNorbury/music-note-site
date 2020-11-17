import React, { useState } from "react"
import styled from "styled-components"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Brand = styled.div`
  img {
    width: 250px;
    @media (max-width: 960px) {
        width: 150px;
    }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <Brand>
            <img
              src={`/music_note_type.png`}
              alt="Music Note type logo. Just the words 'Music Note'"
            />
          </Brand>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/beta">Beta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/privacy">Privacy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/eula">EULA</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
