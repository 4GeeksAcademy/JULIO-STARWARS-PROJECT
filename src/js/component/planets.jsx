import React, { Component, useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/home.css";


export const Planets = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPlanetas()
    })
    // console.log(store.planets)
    return (
        <div>
            <div className="card-group charactersCard">
            <h1 style={{ color: "gray", fontSize: "24px" }}>PLANETAS</h1>
                <div className="d-flex flex-row overflow-scroll">
                    {store.planets.map((item, id) => (
                        <div className="card" key={id} style={{ width: "18rem" }}>
                            <h5 className="card-title">{item.name}</h5>
                            {id === 0? <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt="..." />:
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />}
                            <div className="card-body">
                                <Link rel="stylesheet" to={'/singlePlanet/'+ (id+1)} className="profile">PROFILE</Link>    
                                <button onClick={()=> actions.addFavorites(item.name)}><i className="fa fa-heart"></i></button>                        
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
