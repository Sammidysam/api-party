import React, { Component } from "react"
import { Route } from "react-router-dom"

import GitHubUser from "./GitHubUser"

import "./GitHub.css"

class GitHub extends Component {
    constructor () {
        super()

        this.state = {
            username: ""
        }
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push(`/github/${this.state.username}`)

        this.setState({ username: "" })
    }

    render () {
        return (
            <div className="GitHub">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Look up GitHub user
                        </button>
                    </div>
                </form>

                <Route path="/github/:username" component={GitHubUser} />
            </div>
        )
    }
}

export default GitHub