import React, { Component } from "react";


const User = (props) => {
    return <h2>Hallo, {props.firstName}!</h2>;
}
/*
class User extends Component {
    render() {
        return <h2>Hallo, {this.props.firstName}!</h2>;
    }
}
*/

export default User;