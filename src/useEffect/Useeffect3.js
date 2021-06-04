import React, { useState, useEffect } from "react";

const Useeffect3 = () => {
	const uri = "https://api.github.com/users";

	const [users, setUser] = useState([]);

	const getusers = async () => {
		const response = await fetch(uri);
		const users = await response.json();
		setUser(users);
	};

	useEffect(() => {
		getusers();
	}, []);

	return (
		<>
			<h2>GitHub Users</h2>

			<ul style={{ listStyle: "none" }}>
				{users.map((user) => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li
							key={id}
							style={{
								width: "30%",
								display: "flex",
								flexDirection: "row",
								padding: "10px",
								margin: "10px",
								borderRadius: "10px",
                                backgroundColor: "lightBlue",
                                alignItems: 'flex-start',
                                justifyItems: 'baseline'
							}}
						>
							<img
								src={avatar_url}
								alt={login}
								style={{
									width: "100px",
									height: "100px",
									borderRadius: "50%",
									marginRight: "20px",
								}}
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: 'baseline'
									
								}}
							>
								<h2>{login}</h2>
								<a
									style={{ textDecoration: "none", color: "grey" }}
									href={html_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									profile
								</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Useeffect3;
