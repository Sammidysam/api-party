import React, { Component } from "react"
import { InteractiveMap, Marker, NavigationControl } from "react-map-gl"
import FontAwesome from "react-fontawesome"

import base from "./base"

import "mapbox-gl/dist/mapbox-gl.css"
import "./EsriLocation.css"

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
        .then(location => this.setState({ location, viewport: {
            width: 800,
            height: 600,
            latitude: location.candidates[0].location.y,
            longitude: location.candidates[0].location.x,
            zoom: 10
        } }))
    }

    updateViewport = (viewport) => {
        this.setState({ viewport })
    }

    render () {
        const { location } = this.state

        // This will wait until we have loaded our data to display anything.
        return Object.keys(location).length > 0 && (
            <div className="EsriLocation">
                <h2>{location.candidates[0].address}</h2>
                <div className="Map">
                    <InteractiveMap
                    {...this.state.viewport}
                    mapboxApiAccessToken={base.mapboxKey}
                    onViewportChange={this.updateViewport}>
                        <div style={{position: 'absolute', right: 1, top: 1}}>
                            <NavigationControl onViewportChange={this.updateViewport} />
                        </div>
                        <Marker latitude={location.candidates[0].location.y} longitude={location.candidates[0].location.x} offsetLeft={-9} offsetTop={-8}>
                            <FontAwesome name="star" />
                        </Marker>
                    </InteractiveMap>
                </div>
            </div>
        )
    }
}

export default EsriLocation