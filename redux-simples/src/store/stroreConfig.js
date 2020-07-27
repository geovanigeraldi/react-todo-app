import { createStore, combineReducers } from 'redux'

import numeroReducers from './reducers/numeros'

const reducers = combineReducers({
    numeros: numeroReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig