import React, { useState } from 'react';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:52:13
 * Copyright (c) 2022
 */

const AddUser = () => {
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
	});

	const { name, username, email } = user;

	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border roudned p-4 mt-2 shadow">
					<h2 className="text-center m-4">Register User</h2>
					<div className="mb-3">
						<label htmlFor="Name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your name"
							name="name"
							value={name}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="Username" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your username"
							name="username"
							value={username}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">
							E-mail
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your e-mail address"
							name="email"
							value={email}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<button type="submit" className="btn btn-outline-primary">
						Submit
					</button>
					<button className="btn btn-outline-danger mx-2">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
