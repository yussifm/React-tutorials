import React, { useState, useEffect } from "react";

const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState([]);

	const getProduct = async () => {
		const resp = await fetch(url);
		const data = await resp.json();
		setProduct(data);
		setLoading(false);
	};

	useEffect(() => {
		getProduct();
	}, [url]);

	return { loading, product };
};

export default useFetch;
