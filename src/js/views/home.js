import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => {
	return (
		<div className="container">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	)
};
