import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
	actions.obtenerVehiculo(params.theid)
	},[])
	// console.log(store.planet)
	return (
		<div className="jumbotron container">
			<h5 className="card-title">{store.vehicle.name}</h5>
			<div className="card" style={{"width": "18rem"}}>
				<h5 className="card-title">{store.vehicle.name}</h5>
				<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (parseInt(params.theid)) + ".jpg"} className="card-img-top" alt="..."/>
					<div className="card-body">
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<p className="card-text">Model: {store.vehicle.model}</p>
						<p className="card-text">Manufacturer: {store.vehicle.manufacturer}</p>
						<p className="card-text">Passengers: {store.vehicle.passengers}</p>
						<p className="card-text">Consumables: {store.vehicle.consumables}</p>
						<p className="card-text">Vehicle Class: {store.vehicle.vehicle_class}</p>
						<p className="card-text">Length: {store.vehicle.length}</p>
						<button onClick={()=> actions.addFavorites(store.vehicle.name)}><i className="fa fa-heart"></i></button>                        
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

SingleVehicle.propTypes = {
	match: PropTypes.object
};
