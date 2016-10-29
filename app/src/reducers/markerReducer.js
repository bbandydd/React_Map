import * as types from '../constants/markerConstant'

const initState = [];

const markerReducer = (state=initState, action) => {
    switch(action.type) {
        case types.ADD_MARKER:
            return [
                ...state,
                action.marker
            ]
        default:
            return state
    }
}

export default markerReducer