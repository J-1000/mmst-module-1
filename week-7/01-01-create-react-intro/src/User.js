import React, { Component } from 'react'
import './App.css';

class User extends Component {
    render() {
        const fullName = (user) => {
            return `${user.firstName} ${user.lastName}`;
        }
        const user = {
            firstName: 'Herbert',
            lastName: 'Müller',
            avatarUrl: ''
        };
        const userJSXTag = (
            <h2>
                Hello, {fullName(user)} !
            </h2>
        )
        return (
            <div>
                <h1>User Überschrift</h1>
                {userJSXTag}
            </div>
        )
    }
}
export default User;