import React from 'react'

const MarkerList = ({markers, setMapCenter}) => {
    return (
        <div>
            {
                markers.map((marker, idx) => {
                    return (
                        <div key={`marker_${idx}`} onClick={() => {setMapCenter(marker.position)}}>
                            { marker.text }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MarkerList