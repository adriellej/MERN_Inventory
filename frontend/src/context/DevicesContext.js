import { createContext, useReducer } from 'react'

// Creating a context for managing data
export const DevicesContext = createContext()

// Reducer function to manage state updates for data
export const devicesReducer = (state, action) => {
    switch (action.type) {
        // Action to set goals data
        case 'SET_DEVICES':
            return {
                devices: action.payload
            }
        // Action to create a new goal
        case 'CREATE_DEVICE':
            return {
                devices: [action.payload, ...state.devices]
            }
        // Action to delete a goal
        case 'DELETE_DEVICE':
            return {
                devices: state.devices.filter((item) => item._id !== action.payload._id)
            }
        // Action to update a goal
        case 'UPDATE_DEVICE':
            return {
                devices: state.devices.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                )
            };
        // Default case returns the current state if action type is unknown
        default:
            return state
    }
}

// Context provider component to manage goals state
export const DevicesContextProvider = ({ children }) => {
    // Using useReducer hook to manage state with goalsReducer
    const [state, dispatch] = useReducer(devicesReducer, {
        devices: null
    })

    // Providing state and dispatch function to the context
    return (
        <DevicesContext.Provider value={{...state, dispatch}}>
            { children }
        </DevicesContext.Provider>
    )
}
