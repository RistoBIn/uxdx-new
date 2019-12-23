import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Section } from "./section"

const Card = styled.div`
	position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  align-self: stretch !important;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 320px;

  &:nth-of-type(1) {
  	h5 {
  		border-bottom: 5px solid #4B9FD8;
  	}
  }
  &:nth-of-type(2) {
  	h5 {
  		border-bottom: 5px solid #3CC0C4;
  	}
  }
  &:nth-of-type(3) {
  	h5 {
  		border-bottom: 5px solid #9169AD;
  	}
  }
`

const CardBody = styled.div`
	flex: 1 1 auto;
	padding: 1.25rem;
	text-align: left;
	& h4 {
		font-size: 4rem;
	}
	& h5 {
		font-size: 1.75rem;
    padding-bottom: 1rem;
    color: #868e96;
	}
`

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
						ProdcutData.map(item=>{
							return(
								<Card>
									<CardBody>
										<h4 dangerouslySetInnerHTML={{ __html: item.elements.title.value }} />
										<h5 dangerouslySetInnerHTML={{__html: item.elements.sub_title.value}} />
										<p dangerouslySetInnerHTML={{__html: item.elements.content.value}} />
									</CardBody>
								</Card>
							)
						})
					}
				</div>
			</Container>
		</Section>
	)
}

export default Product