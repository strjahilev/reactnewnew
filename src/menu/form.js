import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);

        var name = props.name;
        var nameIsValid = this.validateName(name);
        var age = props.age;
        var ageIsValid = this.validateAge(age);
        this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }
    validateAge(age){
        return age>0;
    }
    validateName(name){
        return name.length>2;
    }
    onAgeChange(e) {
        var val = e.target.value;
        var valid = this.validateAge(val);
        this.setState({age: val, ageValid: valid});
    }
    onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.nameValid ===true && this.state.ageValid===true){
            var i = 'Привет '+ this.state.name + "; Возраст: " + this.state.age
            var r = document.getElementById('er');
            r.innerHTML = i;
        }
    }
    render() {
        var nameColor = this.state.nameValid===true?"green":"red";
        var ageColor = this.state.ageValid===true?"green":"red";
        return(

            <div>

                    <h1 id='er'></h1>
                   <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Имя:</label><br />
                            <input type="text" value={this.state.name}
                                    onChange={this.onNameChange} style={{borderColor:nameColor}} />
                        </p>
                        <p>
                            <label>Возраст:</label><br />
                            <input type="number" value={this.state.age}
                                    onChange={this.onAgeChange}  style={{borderColor:ageColor}} />
                        </p>
                        <input type="submit" value="Отправить" />
                    </form>
            </div>
        )
    }

}
export default Form
