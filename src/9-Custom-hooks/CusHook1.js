import React, { useState, useEffect } from "react";
import useFetch from "./fetch";

const url = "http://localhost:4000/product";

const CusHook1 = () => {
    const { loading, product } = useFetch(url);
    console.log(product);
	return <>{loading ? <p>Loading...</p> : <p>Data</p>}</>;
};

export default CusHook1;
