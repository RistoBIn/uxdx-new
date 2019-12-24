import React, { Component } from "react"
import styled from "styled-components"


const FadeClick = styled.div`
	margin-top: 1rem;
	border-bottom: 1px solid #777;
	padding: 1rem;
	background: ${props=>props.isVisible ? "#4DD0E1" : "white"};
	color: ${props=>props.isVisible ? "white" : "black"};

	& h4 {
		font-size: 1.5rem;
		margin-bottom: 0px;
		width: calc(100% - 20px);
		display: inline-block;
	}

	&:hover {
		cursor: pointer;

	}
	&:after {
		content: "▼";
    color: ${props=>props.isVisible ? "white" : "#808080"};
    transform: ${props=>props.isVisible ? "rotate(180deg)" : "rotate(0deg)"};
    display: inline-block;
	}
`
const FadeContent = styled.div`
	background: #eee;
	box-shadow: 0 0 10px solid;
	padding: 1rem;
	display: ${props=>(props.isVisible ? "block" : "none")};
	transition: display 1s ease;
`

class Faq extends Component {
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
			<div>
				<div>
					<FadeClick onClick={this.handleFade} isVisible={isVisible}>
						<h4 dangerouslySetInnerHTML={{ __html: data.elements.title.value }} />
					</FadeClick>
					<FadeContent isVisible={isVisible}> 
						<div dangerouslySetInnerHTML={{__html: data.elements.content.value}} /> 
					</FadeContent>
				</div>
			</div>
		)
	}
}

export default Faq