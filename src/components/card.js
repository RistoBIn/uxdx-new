import React, { Component } from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
	position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  align-self: flex-end !important;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 300px;
`

const CardBody = styled.div`
	flex: 1 1 auto;
	padding: 1.25rem;
	text-align: center;
	& h4 {
		font-size: 3rem;
	}
	& h5 {
		font-size: 1.2rem;
    color: #868e96;
	}
	& svg {
		width: 20px;
		color: green;
		
	}
`
const Icon = styled.div`
	transform: ${props=>(props.isVisible ? "rotate(180deg)" : "rotate(0deg)")};
`

const CardTop = styled.div`
	background: blue;
	text-align: center;
	border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`

const FadeContent = styled.div`
	display: ${props=>(props.isVisible ? "block" : "none")};
`

class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			isVisible: false
		}
		this.handleFade=this.handleFade.bind(this)
	}
	handleFade() {
		const nextState = !this.state.isVisible
		this.setState({
			isVisible: nextState
		})
	}
	render() {
		const {isVisible} = this.state
		const {data, key} = this.props
		return(
			<CardWrapper>
				<CardTop>
					<span>In</span>Effective
				</CardTop>
				<CardBody>
					<div >
						<h4 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
						<h5 dangerouslySetInnerHTML={{__html: data.elements.sub_title.value}} />
					</div>
					<Icon onClick={this.handleFade} isVisible={isVisible}>
						<svg class="svg-inline--fa fa-chevron-down fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
					</Icon> 
					<FadeContent isVisible={isVisible}> 
						<div dangerouslySetInnerHTML={{__html: data.elements.content.value}} /> 
					</FadeContent>
				</CardBody>
			</CardWrapper>
		)
	}
}

export default Card