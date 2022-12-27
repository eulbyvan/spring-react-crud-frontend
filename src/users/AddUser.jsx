import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:52:13
 * Copyright (c) 2022
 */

const AddUser = () => {
	let navigate = useNavigate();

	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
	});

	const { name, username, email } = user;

	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:8080/api/1.0/users', user);
		navigate('/');
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border roudned p-4 mt-2 shadow">
					<h2 className="text-center m-4">Register User</h2>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="form-floating mb-3">
							<input
								id="floatingInput"
								type="text"
								className="form-control"
								placeholder="Enter your name"
								name="name"
								value={name}
								onChange={(e) => onInputChange(e)}
							/>
							<label
								htmlFor="floatingInput"
								className="form-label"
							>
								Name
							</label>
						</div>
						<div className="form-floating mb-3">
							<input
								id="floatingInput"
								type="text"
								className="form-control"
								placeholder="Enter your username"
								name="username"
								value={username}
								onChange={(e) => onInputChange(e)}
							/>
							<label
								htmlFor="floatingInput"
								className="form-label"
							>
								Username
							</label>
						</div>
						<div className="form-floating mb-3">
							<input
								id="floatingInput"
								type="text"
								className="form-control"
								placeholder="Enter your e-mail"
								name="email"
								value={email}
								onChange={(e) => onInputChange(e)}
							/>
							<label
								htmlFor="floatingInput"
								className="form-label"
							>
								E-mail
							</label>
						</div>
						<button
							type="submit"
							className="btn btn-outline-primary"
						>
							Submit
						</button>
						<Link className="btn btn-outline-danger mx-2" to="/">
							Cancel
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
