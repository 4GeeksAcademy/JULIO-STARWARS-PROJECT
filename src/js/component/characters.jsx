import React, { Component, useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Characters = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPersonajes()
    })
    // console.log(store.characters)
    return (
        <div>
            <div className="card-group charactersCard">
            <h1 style={{ color: "gray", fontSize: "24px" }}>PERSONAJES</h1>
                <div className="d-flex flex-row overflow-scroll">
                    {store.characters.map((item, id) => (
                        <div class="card" key={id} style={{ width: "18rem" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Genero:{item.gender}</p>
                                <p class="card-text">Eye Color:{item.eye_color}</p>
                                <Link rel="stylesheet" to={'/single/'+ (id+1)} className="profile">PROFILE</Link>
                                <button onClick={()=> actions.addFavorites(item.name)}><i className="fa fa-heart"></i></button>                        
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


