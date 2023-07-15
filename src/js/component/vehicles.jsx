import React, { Component, useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Vehicles = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerVehicles()
    })
    // console.log(store.vehicles)
    return (
        <div>
            <div className="card-group charactersCard">
            <h1 style={{ color: "gray", fontSize: "24px" }}>NAVES</h1>
                <div className="d-flex flex-row overflow-scroll">
                    {store.vehicles.map((item, id) => (
                        <div className="card" key={id} style={{ width: "18rem" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link rel="stylesheet" to={'/vehicles/'+ (id+1)} className="profile">PROFILE</Link>
                                <button onClick={()=> actions.addFavorites(item.name)}><i className="fas fa-heart"></i></button>                        
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
