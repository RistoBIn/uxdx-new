import React from "react"
import styled from "styled-components"

import { Section } from "./section"
import Container from "./container"

const Item = styled.div`
	width: 10rem;
	text-align: center;	

	& h3 {
		font-size: 1.75rem;
		font-weight: 800;
		border-bottom: 4px solid #a865e1;
    display: inline-block;
    padding: 0px 10px;
	}
`

const Conference = ({data}) => {
	const ConferenceData = data.elements.columns.linked_items
	return(
		<Section padding="3rem 0">
			<Container>
				<div className="text-center">
					<h2 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
					<h3 dangerouslySetInnerHTML={{ __html: data.elements.sub_title.value }} />
				</div>
				<div className="d-flex justify-content-around flex-wrap">
					{
						ConferenceData.map(item=>{
							return(
								<Item>
									<h3 dangerouslySetInnerHTML={{ __html: item.elements.title.value }} />
									<p dangerouslySetInnerHTML={{__html: item.elements.sub_title.value}} />
								</Item>
							)
						})
					}
				</div>
			</Container>
		</Section>
	)
}

export default Conference