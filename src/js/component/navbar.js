import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3" padding="100px">
			<Link to="/">
			<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="Logo" height="200" width="400" />			
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">FAVORITES</button>
				</Link>
			</div>
		</nav>
	);
};
