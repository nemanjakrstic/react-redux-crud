import update from 'immutability-helper'

const createReducer = (resource) => (state = {}, action) => {
    const {type, payload} = action || {}

    if (type === `${resource}.create`) {
        return update(state, {
            [payload.id]: {$set: payload}
        })
    }

    if (type === `${resource}.update` && state[payload.id]) {
        return update(state, {
            [payload.id]: {$set: payload}
        })
    }

    if (type === `${resource}.delete`) {
        return update(state, {$unset: [payload.id]})
    }

    return state
}

export default createReducer
