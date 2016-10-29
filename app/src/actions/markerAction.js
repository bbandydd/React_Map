import * as types from '../constants/markerConstant'

export function addMarker(marker) {
    return {
        type: types.ADD_MARKER,
        marker
    }
}