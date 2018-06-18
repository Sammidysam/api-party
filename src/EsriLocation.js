import React, { Component } from "react"

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
        fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${this.props.match.params.locationRequest}&outFields=Match_addr,Addr_type"`)
        .then(response => response.json())
        .then(location => this.setState({ location }))
    }

    render () {
        const { location } = this.state

        return Object.keys(location).length > 0 && (
            <div className="EsriLocation">
                {location.candidates[0].location.x}, {location.candidates[0].location.y}
            </div>
        )
    }
}

export default EsriLocation