import React, { Component } from "react"

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

    handleSubmit = () => {

    }

    render () {
        return (
            <div className="GitHub">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />

                <form>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Look up GitHub user
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GitHub