import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Section } from "./section"
import Card from "./card"


const Product = ({data}) => {
	const ProdcutData = data.elements.columns.linked_items
	return(
		<Section backgroundColor={data.elements.background_color.value} padding="7rem 0">
			<Container>
				<div className="text-center">
					<h2 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
				</div>
				<div className="d-flex justify-content-around flex-wrap">
					{
						ProdcutData.map((item, i)=>{
							return(
								<Card data={item} key={i} />
							)
						})
					}
				</div>
			</Container>
		</Section>
	)
}

export default Product