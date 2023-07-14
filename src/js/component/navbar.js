import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="Logo" style={{height:"200px", width:"400px"}} />			
			</Link>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"role="button"data-bs-toggle="dropdown">
					FAVORITES
				</a>
				<ul className="dropdown-menu">
					{store.favorites.map((item,id)=> (
						<li key={id}>
							<a className="dropdown-item" onClick={()=>{actions.addFavorites(item)}}>
							{item}
						<i className="fa-solid fa-trash float-end"></i>
						</a>
						</li>
					))}
				</ul>
				{/* <Link to="/demo">
					<button className="btn btn-warning">FAVORITES</button>
				</Link> */}
			</div>
		</nav>
		</div>
	);
};
