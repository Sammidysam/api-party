import React, { Component } from "react"
import ReactMapGL from "react-map-gl"

import base from "./base"

class EsriLocation extends Component {
    constructor (props) {
        super(props)

        this.state = {
            location: {}
        }

        this.fetchLocationData()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.locationRequest !== this.props.match.params.locationRequest)
            this.fetchLocationData()
    }

    fetchLocationData = () => {
        fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${this.props.match.params.locationRequest}&outFields=Match_addr,Addr_type`)
        .then(response => response.json())
        .then(location => this.setState({ location }))
    }

    render () {
        const { location } = this.state

        // This will wait until we have loaded our data to display anything.
        return Object.keys(location).length > 0 && (
            <div className="EsriLocation">
                <ReactMapGL
                width={400}
                height={400}
                latitude={location.candidates[0].location.x}
                longitude={location.candidates[0].location.y}
                zoom={8}
                mapboxApiAccessToken={base.mapboxKey}
                onViewportChange={viewport => this.setState({ viewport })} />
            </div>
        )
    }
}

export default EsriLocation