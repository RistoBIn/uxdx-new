import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
    background: #212529;
    color: #fff;
    padding: 3rem 0;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
`

const Footer = () => {

  return(
    <FooterWrapper>
      <Container>
          <div>
            Footer
          </div>
      </Container>
    </FooterWrapper>
  )
}
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
