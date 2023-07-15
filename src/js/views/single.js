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
			<h5 className="card-title">{store.character.name}</h5>
			<div className="card" style={{"width": "18rem"}}>
				<h5 className="card-title">{store.character.name}</h5>
				<img src={"https://starwars-visualguide.com/assets/img/characters/" + (parseInt(params.theid)) + ".jpg"} className="card-img-top" alt="..."/>
					<div className="card-body">
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<p className="card-text">Gender: {store.character.gender}</p>
						<p className="card-text">Height: {store.character.height}</p>
						<p className="card-text">Eye Color: {store.character.eye_color}</p>
						<p className="card-text">Skin Color: {store.character.skin_color}</p>
						<button onClick={()=> actions.addFavorites(store.character.name)}><i className="fa fa-heart"></i></button>                        
					</div>
			</div>
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
