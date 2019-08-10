import React from 'react'
import Products from "./products";
import ProductsRouter from "./products-router";

class Product extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        const ProdId = this.props.match.params.id;
        return (
            <div>
                <Products/>
                <h1>Продукты компании:</h1>
                <h2>Продукт № {ProdId}</h2>
            </div>
                )
    }
}
export default Product
