import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Product from "./product";
import Products from "./products";


class ProductRouter extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Products/>
                <Switch>

                    <Route exact path='/products/:id' component={Product}/>
                </Switch>

            </div>
        )
    }
}
export default ProductRouter
