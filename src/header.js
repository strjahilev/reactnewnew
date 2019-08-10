import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <header className="container-fluid">
            <nav className="navbar navbar-expand-sm bg-dark row d-flex justify-content-center">
                <ul className="navbar-nav row d-flex justify-content-between w-auto">
                    <li className="nav-item col-lg-3 " ><NavLink exact to='/' activeStyle={{color:"yellow", fontWeight:"bold"}}>Home</NavLink></li>
                    <li className="nav-item col-lg-3 "><NavLink to='/company' activeStyle={{color:"yellow", fontWeight:"bold"}}>Company</NavLink></li>
                    <li className="nav-item col-lg-3 "><NavLink  to='/products' activeStyle={{color:"yellow", fontWeight:"bold"}}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    }
}
export default Header
