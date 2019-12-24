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
					<button onClick={this.handleFade} isVisible={isVisible}>click</button> 
					<FadeContent isVisible={isVisible}> 
						<div dangerouslySetInnerHTML={{__html: data.elements.content.value}} /> 
					</FadeContent>
				</CardBody>
			</CardWrapper>
		)
	}
}

export default Card