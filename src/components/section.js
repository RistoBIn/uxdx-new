import React from "react"
import styled from "styled-components"

export const Section = styled.div`
	background-color: #${props=>props.backgroundColor};
	padding: ${props=>props.padding};
	border-bottom: 1px solid #00000033;
	opacity: 0.9;
`

export const ImageBackgroundWrapper = styled.div`
	background-image: url(${props=>props.backgroundImage});
	background-size: cover;
	opacity: 1;
`

