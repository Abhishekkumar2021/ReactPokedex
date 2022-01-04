import "../static/Card.css";
import React from "react";

export default function Card(props) {
	const { id } = props;
	if (id) {
		if (id < 10) {
			return (
				<div className="Card">
					<img
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`}
						className="Card-image"
						alt="Pokedex"
					/>
				</div>
			);
		} else if (id < 100) {
			return (
				<div className="Card">
					<img
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`}
						className="Card-image"
						alt="Pokedex"
					/>
				</div>
			);
		} else {
			return (
				<div className="Card">
					<img
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
						className="Card-image"
						alt="Pokedex"
					/>
				</div>
			);
		}
	} else {
		return (
			<div className="Card">
				<img
					src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
					className="Card-image"
					alt="Pokedex"
				/>
			</div>
		);
	}
}
