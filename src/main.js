import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './menu/home';
import Company from './menu/company';
import Products from './menu/products';
import ProductsRouter from "./menu/products-router";
import ProductRouter from "./menu/product-router";



class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <main>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/company' component={Company}/>
                {/*<Route exact path='/products' component={Products}/>*/}
            </Switch>

            <ProductsRouter/>




        </main>
    }
}
export default Main
