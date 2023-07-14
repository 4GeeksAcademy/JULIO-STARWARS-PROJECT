import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.obtenerPersonaje(params.theid)
	},[])
	// console.log(store.character)
	return (
		<div className="jumbotron container">
			<div className="card" style={{"width": "18rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/characters/" + (parseInt(params.theid)) + ".jpg"} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{store.character.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
			</div>
			<h1 className="display-4">This will show the demo element: </h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
