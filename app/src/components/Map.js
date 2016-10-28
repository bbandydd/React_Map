import React from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Marker'

const Map = ({center, zoom, markers}) => {
    return (
        <GoogleMap defaultCenter={center} defaultZoom={zoom}>
            {
                markers.map((marker, idx) => <Marker key={`marker_${idx}`} {...marker.position} text={marker.text} photo={marker.photo} index={idx+1}/>)
            }
        </GoogleMap>
    )
}

export default Map