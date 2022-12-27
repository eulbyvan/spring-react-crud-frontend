import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:52:37
 * Copyright (c) 2022
 */

const ViewUser = () => {
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
	});

	const { id } = useParams();

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const result = await axios.get(
			`http://localhost:8080/api/1.0/users/${id}`
		);
		setUser(result.data);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border roudned p-4 mt-2 shadow">
					<h2 className="text-center m-4">User Details</h2>

					<div className="card">
						<div className="card-header">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<b>ID: </b>
									{user.id}
								</li>
								<li className="list-group-item">
									<b>Name: </b>
									{user.name}
								</li>
								<li className="list-group-item">
									<b>Username: </b>
									{user.username}
								</li>
								<li className="list-group-item">
									<b>E-mail: </b>
									{user.email}
								</li>
							</ul>
						</div>
					</div>
					<Link className="btn btn-primary my-2" to="/">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ViewUser;
