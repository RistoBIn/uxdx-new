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
  font-weight: 800;

  a {
    text-decoration: none;
    color: white;
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
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </Logo>
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
