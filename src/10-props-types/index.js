import React from 'react';
import { useFetch } from "../9-Custom-hooks/fetch";
import Product from "./product";


const url = "http://localhost:4000/product";
const Index = () => {
    const {product} = useFetch(url);
    return (
        <>{
            product.map((item) => {

                return (
                    <Product id={item.id} {...item}/>
                )
            })
        }
            
        </>
    )
}

export default Index
