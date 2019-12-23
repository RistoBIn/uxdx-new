import React from "react"
import styled from "styled-components"
import Container from "./container"
import {Section} from "./section"
import Button from "./button"

const Card = styled.div`
	position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  align-self: stretch !important;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 450px;
`

const CardBody = styled.div`
	flex: 1;
	padding: 2rem;
	text-align: center;
	& h4 {
		font-size: 2.5rem;
	}
	& h5 {
		font-size: 1.75rem;
    color: #868e96;
	}
	& img {
		margin-top: 2rem;
	}
`

const Offer = ({data}) => {
	const OfferData = data.elements.columns.linked_items
	let buttonText = ""
	return(
		<Section backgroundColor={data.elements.background_color.value} padding="7rem 0">
			<Container>
				<div className="text-center">
					<h2 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
				</div>
				<div className="d-flex justify-content-around flex-wrap">
					{
						OfferData.map((item, i)=>{
							if (i < 2 ) {
								const imgData = item.elements.image.value[0].url
								return(
									<Card>
										<CardBody>
											<h4 dangerouslySetInnerHTML={{ __html: item.elements.title.value }} />
											<h5 dangerouslySetInnerHTML={{__html: item.elements.sub_title.value}} />
											<p dangerouslySetInnerHTML={{__html: item.elements.content.value}} />
											<img src={imgData} />
										</CardBody>
									</Card>
								)
							} else {
								 buttonText = item.elements.widgets.linked_items[0].elements.text.value
							}
						})
					}
				</div>
				<Button
					color="#000"
					bgColor="#fff"
					borderColor="#000"
					hoverColor="#fff"
					hoverBgColor="#000"
					dangerouslySetInnerHTML={{__html: buttonText}}
				/>
			</Container>
		</Section>
	)
}

export default Offer