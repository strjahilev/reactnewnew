import React from 'react';
import Form from "./form";

class Company extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Компания Unlimited приветствует Вас!</h1>
                <Form name="" age="" />
            </div>
        );
    }
}
export default Company
