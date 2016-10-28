import React from 'react'
import GoogleMap from 'google-map-react'

import Mark from './Mark'

const Map = ({center, zoom, marks}) => {
    return (
        <GoogleMap defaultCenter={center} defaultZoom={zoom}>
            {
                marks.map((mark, idx) => <Mark {...mark.position} text={mark.text} index={idx+1}/>)
            }
        </GoogleMap>
    )
}

export default Map