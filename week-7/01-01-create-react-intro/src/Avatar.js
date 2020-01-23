import React, { Component } from "react";
import "./App.css";

class Avatar extends Component {

    render() {

        const formatName = (user) => {
            return `${user.firstName} ${user.lastName}`;
        }

        const user = {
            firstName: 'Petra',
            lastName: 'Meier',
            avatarUrl: 'https://aisvip-a.akamaihd.net/masters/1178792/1000x562/avatar-2-kinostart-wird-um-ein-jahr-verschoben.jpg'
        };

        const displayAvatar = (user) => {
            if (user.avatarUrl) {
                return <img src={user.avatarUrl} />
            } else {
                return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300' />
            }
        }

        const element = (
            <h2>
                Hello, {formatName(user)}!
            </h2>
        );

        return (
            <div className="App">
                <h1> Avatar</h1>
                {element}
                {displayAvatar(user)}
            </div>
        );
    }
}

export default Avatar;