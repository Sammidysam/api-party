import React, { Component } from "react"

import "./GitHub.css"

class GitHub extends Component {
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
                        <input type="text" />
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