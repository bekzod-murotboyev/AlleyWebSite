// <script async defer src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&amp;paint_origin=&amp;libraries=geometry,search&amp;v=3.exp&amp;language=en_GB&amp;callback=onApiLoad"></script>
// <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSECsV11t3FDisUFwLb5btHY-EWcP24uio&callback=initMap"></script>
// AIzaSECsV11t3FDisUFwLb5btHY-EWcP24uio

import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'






function Map({zoomLevel}) {

    const key=''

    const LocationPin = ({text}) => (
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon"/>
            <p className="pin-text">{text}</p>
        </div>
    )

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }

    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyDzsQvkwjNJ_AbvnLBEuZearzU-ORx74VI'}}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map