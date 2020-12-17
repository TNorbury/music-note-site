import React from "react"
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap"
import styled from "styled-components"
import { GlobalStyle, PageWrapper } from "../style/global_style"
import Footer from "./footer"
import MyHelmet, { MyHelmetProps } from "./helmet"

interface HeaderProps extends MyHelmetProps {}

interface HeaderState {
  isOpen: boolean
}

const Brand = styled.div`
  img {
    width: 250px;
    @media (max-width: 960px) {
      width: 150px;
    }
  }
`

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps | Readonly<HeaderProps>) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  toggle = function () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  public render() {
    return (
      <div>
        <GlobalStyle />
        <MyHelmet
          title={this.props.title}
          includeDescription={this.props.includeDescription}
          path={this.props.path}
        />
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">
            <Brand>
              <img
                src={`/music_note_type.png`}
                alt="Music Note type logo. Just the words 'Music Note'"
              />
            </Brand>
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavBarItem link="/features" title="Features" />
            </Nav>
          </Collapse>
        </Navbar>
        <PageWrapper>{this.props.children}</PageWrapper>
        <Footer />
      </div>
    )
  }
}

interface NavBarItemProps {
  link: string
  title: string
}

class NavBarItem extends React.Component<NavBarItemProps> {
  render() {
    return (
      <NavItem>
        <NavLink href={this.props.link}>{this.props.title}</NavLink>
      </NavItem>
    )
  }
}
