import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Dec 27 2022 10:51:59
 * Copyright (c) 2022
 */

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:8080/api/1.0/users');
		console.log(result.data);
		setUsers(result.data);
	};

	return (
		<div>
			<div className="py-4">
				<table className="table border shadow">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
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
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
