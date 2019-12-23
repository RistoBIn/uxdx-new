import React from "react"
import styled from "styled-components"
import Container from "./container"
import Button from "./button"

const HeroWrapper = styled.div`
	text-align: center;
	background-image: url(${props=>props.backgroundImage});
	background-size: cover;
	opacity: 1;
	color: white;

	& h1 {
		font-size: 3rem;
    font-weight: 800;
	}

	& h3 {
		font-size: 1.5rem;
		font-weight: 400;
		font-style: italic;
	}
`

const ColorWrapper = styled.div`
	background-color: #${props=>props.backgroundColor};
	opacity: 0.9;
	padding: 8rem;
`

const Hero = ({data}) => {

	return(
		<HeroWrapper 
			backgroundImage={data.elements.background_image.value[0].url}
		>
			<ColorWrapper backgroundColor={data.elements.background_color.value}>
				<Container>
					<h1 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
					<h3 dangerouslySetInnerHTML={{ __html: data.elements.sub_title.value }} />
					<Button 
						color="#fff"
						bgColor="#a865e1"
						borderColor="#a865e1"
						hoverBgColor="#a865a1"
						dangerouslySetInnerHTML={{ __html: data.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.text.value }} 
					/>
				</Container>
			</ColorWrapper>
		</HeroWrapper>
	)
}

export default Hero