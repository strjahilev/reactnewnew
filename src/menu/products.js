import React from 'react';
import {NavLink} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Product from "./product";
import ProductRouter from "./product-router";


class Products extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>

                <ul>
                    <li><NavLink to='/products/1'>1</NavLink></li>
                    <li><NavLink to='/products/2'>2</NavLink></li>
                    <li><NavLink to='/products/3'>3</NavLink></li>
                </ul>


            </div>
        );
    }
}
export default Products
