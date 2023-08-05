/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    transaction: []
}


export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <Context.Provider
            value={
                {
                    transactions: state.transactions
                }
            }>
            {children}
        </Context.Provider>
    )
}