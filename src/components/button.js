import React from "react"
import styled from "styled-components"

const Button = styled.a`
	p {
		color: ${props=>props.color};
	  background-color: ${props=>props.bgColor};
	  border: 1px solid ${props=>props.borderColor};
		margin: 0px auto;
		margin-top: 30px;
		padding: 0.5rem 1rem;
	  font-size: 1.25rem;
	  line-height: 1.5;
	  border-radius: 0.3rem;
	  width: fit-content;

	  &:hover {
	  	cursor: pointer;
	  	color: ${props=>props.hoverColor};
	  	background-color: ${props=>props.hoverBgColor};
	  }
	}
`

export default Button