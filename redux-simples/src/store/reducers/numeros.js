import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payLoad
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payLoad
            }
        default: return state

    }
}