import React, { Component } from "react"
import { Route } from "react-router-dom"

import EsriLocation from "./EsriLocation"

import "./Esri.css"

class Esri extends Component {
    constructor () {
        super()

        this.state = {
            locationRequest: ""
        }
    }

    handleChange = (e) => {
        this.setState({ locationRequest: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push(`/esri/${this.state.locationRequest}`)

        this.setState({ locationRequest: "" })
    }

    render () {
        return (
            <div className="Esri">
                <img
                    src="https://gisandscience.files.wordpress.com/2010/05/new-esri-logo.gif?w=507&zoom=2"
                    alt="Esri"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.locationRequest} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Look up an address
                        </button>
                    </div>
                </form>

                <Route path="/esri/:locationRequest" component={EsriLocation} />
            </div>
        )
    }
}

export default Esri