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
                    <li><NavLink to='/products/1?name=Samsung&number=8'>1</NavLink></li>
                    <li><NavLink to='/products/2?name=iPhone&number=7'>2</NavLink></li>
                    <li><NavLink to='/products/3?name=LG&number=123'>3</NavLink></li>
                </ul>


            </div>
        );
    }
}
export default Products
