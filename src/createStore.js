import {createStore as createReduxStore, combineReducers} from 'redux'
import createReducer from './createReducer'
import mapFrom from './mapFrom'

const createStore = (connect, resources) => {
    const reducers = mapFrom(resources, (resource) => createReducer(resource))
    const rootReducer = combineReducers(reducers)
    const store = createReduxStore(rootReducer)

    return {
        create(resource, payload) {
            store.dispatch({type: `${resource}.create`, payload})
        },

        update(resource, payload) {
            store.dispatch({type: `${resource}.update`, payload})
        },

        delete(resource, payload) {
            store.dispatch({type: `${resource}.delete`, payload})
        },

        getStore() {
            return store
        },

        connect(component, resources) {
            const mapStateToProps = (state) => (
                mapFrom(resources, (resource) => state[resource])
            )

            return connect(mapStateToProps)(component)
        }
    }
}

export default createStore
