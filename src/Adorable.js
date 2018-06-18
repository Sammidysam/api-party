import React, { Component } from "react"
import { Route } from "react-router-dom"

import AdorableAvatar from "./AdorableAvatar"

import "./Adorable.css"

class Adorable extends Component {
    constructor () {
        super()

        this.state = {
            email: ""
        }
    }

    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push(`/adorable/${this.state.email}`)

        this.setState({ email: "" })
    }

    render () {
        return (
            <div className="Adorable">
                <img
                    src="http://madison365.com/wp-content/uploads/2016/09/adorable-logo-530px.png"
                    alt="Adorable"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Generate Adorable.io generated avatar from email
                        </button>
                    </div>
                </form>

                <Route path="/adorable/:email" component={AdorableAvatar} />
            </div>
        )
    }
}

export default Adorable