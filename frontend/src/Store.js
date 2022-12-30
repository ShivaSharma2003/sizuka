import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
})

const InitialState = {}

const middleware = [thunk]

const store = configureStore(
    { reducer },
    InitialState,
    composeWithDevTools(applyMiddleware(middleware))
)

export { store }