import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from "./products";
import Product from './product'
import ProductRouter from "./product-router";


class ProductsRouter extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/products' component={Products}/>
                    <Route exact path='/products/:id' component={Product}/>
                </Switch>

            </div>
        )
    }
}
export default ProductsRouter
