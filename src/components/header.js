import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    background: linear-gradient(to left, #a865e1, #7F7FF0);
    color: #fff;
`

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  display: flex;
`

const Logo = styled.div`
  font-size: 1.5rem;
  margin-right: 0.3rem;
  width: 200px;
  font-weight: 800;

  a {
    text-decoration: none;
    color: white;
  }
`
const Menu = styled.div`
  text-align: right;
  width: calc(100% - 200px);

  a {
    text-decoration: none;
    color: white;
    margin: 0 30px;
  }
`

const Header = ({ title, menuIems }) => {

  return(
    <HeaderWrapper>
      <Nav>
        <Logo>
          <Link
            to="/"
          >
            UXDX
          </Link>
        </Logo>
        <Menu>
          <Link to="/framework">Framework</Link>
          <Link to="/europe/speakers">Speakers</Link>
          <Link to="/europe/tickets">Tickets</Link>
        </Menu>
      </Nav>
    </HeaderWrapper>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
