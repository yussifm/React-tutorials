import React, { useState, useEffect } from "react";

const Multiplereturns = () => {
	const uri = "https://api.github.com/users";
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetch(uri)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					setLoading(false);
					setError(true);
					throw Error(response.statusText);
				}
			})
			.then((user) => {
				setLoading(false);
				setUser(user);
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<>
				<h2>Loading.... Data</h2>
			</>
		);
	}

	if (error) {
		return (
			<>
				<h3>Error getting data.</h3>
				<p>Check your network connection</p>
			</>
		);
	}

	return (
		<>
			{user.map((person) => {
				const { id, login, avatar_url } = person;
				return (
					<div key={id}>
						<h3>{login}</h3>
						<img src={avatar_url} alt={login} width="50" height="50" />
					</div>
				);
			})}
		</>
	);
};

export default Multiplereturns;
