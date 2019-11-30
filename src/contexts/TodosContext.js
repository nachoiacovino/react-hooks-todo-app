import React, { createContext } from 'react'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
import TodosReducer from '../reducers/TodosReducer'

const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = props => {
    const [todos, dispatch] = useLocalStorageReducer("todos", [], TodosReducer)

    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}    
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export default TodosContext