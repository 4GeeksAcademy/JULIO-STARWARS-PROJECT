import React, { Component, useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


export const Vehicles = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerVehicles()
    })
    console.log(store.vehicles)
    return (
        <div>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.vehicles.map((item, id) => (
                        <div class="card" key={id} style={{ width: "18rem" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 1) + ".jpg"} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Genero:{item.gender}</p>
                                <p class="card-text">Eye Color:{item.eye_color}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
