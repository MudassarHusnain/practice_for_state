import React, { Component } from "react";

class User extends Component {
    constructor() {
        super();
        this.state = {
            name: "Mudassar Jutt"
        };

    }
    change_name() {
        this.setState({
            name: "Jutt sab"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.change_name()}>Update Name</button>
            </div>
        )
    }
}
export default User