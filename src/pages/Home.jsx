import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:51:59
 * Copyright (c) 2022
 */

const Home = () => {
	const [users, setUsers] = useState([]);

	// const { id } = useParams();

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:8080/api/1.0/users');
		console.log(result.data);
		setUsers(result.data);
	};

	const deleteUser = async (id) => {
		await axios.delete(`http://localhost:8080/api/1.0/users/${id}`);
		loadUsers();
	};

	return (
		<div>
			<div className="py-4">
				<table className="table border shadow">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Username</th>
							<th scope="col">Email</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>
									<Link
										className="btn btn-primary mx-2"
										to={`/users/${user.id}`}
									>
										View
									</Link>
									<Link
										className="btn btn-outline-primary mx-2"
										to={`/users/edit/${user.id}`}
									>
										Edit
									</Link>
									<button
										className="btn btn-danger mx-2"
										onClick={() => deleteUser(user.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
