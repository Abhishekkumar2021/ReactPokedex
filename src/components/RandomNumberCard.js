import React, { Component } from "react";
import "../static/RandomNumberCard.css";

class RandomNumberCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
		};
		this.changeNumber = this.changeNumber.bind(this);
	}
	changeNumber(event) {
		let rand = Math.floor(Math.random() * 101);
		this.setState({ number: rand });
	}
	render() {
		return (
			<div className="RandomNumberCard">
				<div className="RandomNumberCard-number">{this.state.number}</div>
				<button className="RandomNumberCard-button" onClick={this.changeNumber}>
					Get Random Number
				</button>
			</div>
		);
	}
}
export default RandomNumberCard;
