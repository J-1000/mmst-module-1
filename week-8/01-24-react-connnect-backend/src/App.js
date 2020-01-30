import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor() {
        console.log("App --> constructor()");
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        console.log("App --> componentDidMount()")
        axios.get("https://countries.tech-savvy.tech/countries")
            .then(response => {
                console.log("App --> Promise resolved")
                this.setState({ countries: response.data })
            })
    }

    /*
        handleFormSubmit = e => {
            e.preventDefault()
            axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
              .then(response => console.log(response))
              .catch(err => console.log(err))
          }
    */

    render() {
        console.log("App --> render()");
        return (
            <div className="App">
                <h1>Countries List</h1>
                {
                    this.state.countries.map(
                        (country, index) =>
                            <h2 key={index}>{country.name.common}</h2>
                    )
                }
            </div>
        );
    }
}

export default App;
