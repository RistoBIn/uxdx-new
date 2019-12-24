import React from "react"
import styled from "styled-components"
import Container from "./container"
import {ImageBackgroundWrapper, Section} from "./section"
import Button from "./button"

const RegsiterSection = ({data}) => {
	
	let btnText = data.elements.columns.linked_items[1].elements.widgets.linked_items[0].elements.button_text.value
	
	return(
		<ImageBackgroundWrapper backgroundImage={data.elements.background_image.value[0].url}>
			<Section padding="7rem 0"> 
				<Container>
					<div className="text-center" style={{color: "white"}}>
						<div dangerouslySetInnerHTML={{ __html: data.elements.columns.linked_items[0].elements.title.value }} />
						<h5 dangerouslySetInnerHTML={{__html: data.elements.columns.linked_items[0].elements.sub_title.value}} />
						<div dangerouslySetInnerHTML={{__html: data.elements.columns.linked_items[0].elements.content.value}} />
						<br/><br/>
						<Button
							color="#000"
							bgColor="#fff"
							borderColor="#000"
							hoverColor="#fff"
							hoverBgColor="#000"
						>
							{btnText}
						</Button>
					</div>
				</Container>
			</Section>
		</ImageBackgroundWrapper>
	)
}

export default RegsiterSection