import React from 'react'

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = (photo) => {
    return {
        // initially any map object has left top corner at lat lng coordinates
        // it's on you to set object origin to 0,0 coordinates
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        border: '2px solid red',
        borderRadius: K_HEIGHT,
        backgroundImage: `url(${photo})`,
        backgroundSize: `${K_WIDTH}px ${K_HEIGHT}px`
    }
};

const Marker = ({text, photo, index}) => {
    return (
        <div style={greatPlaceStyle(photo)} title={text} onClick={() => alert(text)}>
        </div>
    )
}

export default Marker