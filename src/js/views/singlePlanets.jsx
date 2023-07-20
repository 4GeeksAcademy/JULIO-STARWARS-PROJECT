import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.obtenerPlaneta(params.theid)
	},[])
	// console.log(store.planet)
	return (
		<div className="jumbotron container">
			<h5 className="card-title">{store.planet.name}</h5>
			<div className="card" style={{"width": "18rem"}}>
				{(parseInt(params.theid)) === 1 ? <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt="..."/>:
				<img src={"https://starwars-visualguide.com/assets/img/planets/" + (parseInt(params.theid)) + ".jpg"} className="card-img-top" alt="..."/>}
					<div className="card-body">
                        <p className="card-text">Rotation period: {store.planet.rotation_period}</p>
                        <p className="card-text">Diameter: {store.planet.diameter}</p>
                        <p className="card-text">Climate: {store.planet.climate}</p>
                        <p className="card-text">Terrain: {store.planet.terrain}</p>
                        <p className="card-text">Population: {store.planet.population}</p>
						<button onClick={()=> actions.addFavorites(store.planet.name)}><i className="fa fa-heart"></i></button>                        
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

SinglePlanet.propTypes = {
	match: PropTypes.object
};
