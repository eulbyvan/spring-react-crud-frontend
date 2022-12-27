import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:51:45
 * Copyright (c) 2022
 */

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Spring and React CRUD Application
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link className="btn btn-outline-light" to="/user/add">
						Add User
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
