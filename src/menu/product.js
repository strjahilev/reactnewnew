import React from 'react'
import Products from "./products";


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
                <p>Name: {new URLSearchParams(this.props.location.search).get("name")}</p>
                <p>Number: {new URLSearchParams(this.props.location.search).get("number")}</p>
                {/*<p>Match: {JSON.stringify(this.props.match)}</p>*/}
                {/*<p>Location {JSON.stringify(this.props.location)}</p>*/}
                {/*<p>Name: {new URLSearchParams(this.props.location.search).get("name")}</p>*/}
                {/*this.props.match.params.id*/}
            </div>
                )
    }
}
export default Product
