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
		margin-bottom: 2.5rem;
	}
`

const ColorWrapper = styled.div`
	background-color: #${props=>props.backgroundColor};
	opacity: 0.9;
	padding: 8rem;
`

const RenderButton =  (data) => {
	let BtnText = ""
	if (data.elements.columns.linked_items[0] != undefined) {
		BtnText = data.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.text.value

		return (
			<Button 
				color="#fff"
				bgColor="#a865e1"
				borderColor="#a865e1"
				hoverBgColor="#a865a1"
				href="/framework"
			>
				{ BtnText.replace("<p>", "").replace("</p>", "") }
			</Button>
		)
	} else {
		return true
	}
}

const Hero = ({data}) => {
	let bgImage = ""
	
	if (data.elements.background_image.value[0] != undefined) {
		bgImage = data.elements.background_image.value[0].url
	}

	return(
		<HeroWrapper 
			backgroundImage={bgImage}
		>
			<ColorWrapper backgroundColor={data.elements.background_color.value ? data.elements.background_color.value : "777" }>
				<Container>
					<h1 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
					<h3 dangerouslySetInnerHTML={{ __html: data.elements.sub_title.value }} />
					{ RenderButton(data) }
				</Container>
			</ColorWrapper>
		</HeroWrapper>
	)
}

export default Hero