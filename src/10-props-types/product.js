import React, { Component } from "react";
import PropTypes from "prop-types";

const Product = ({
	product_name,
	product_price,
	product_description,
	categories,
}) => {
	return (
		<div>
            <h2>{product_name}</h2>
            <p>{categories[0].category_name}</p> 
            <h5>${product_price}</h5>
            <p>{product_description}</p>
            <hr />

			<h2>product</h2>
		</div>
	);
};

Product.propTypes = {
	product_name: PropTypes.string.isRequired,
	product_price: PropTypes.number.isRequired,
	product_description: PropTypes.string.isRequired,
	categories: PropTypes.object.isRequired,
};

Product.defaultProps = {
    product_name: 'product',
    product_price: 0,
    product_description: "no product",
    categories: [],
}
export default Product;
