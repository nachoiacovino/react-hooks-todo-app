import React, { useReducer, createContext } from 'react'
import TodosReducer from '../reducers/TodosReducer'

const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = props => {
    const [todos, dispatch] = useReducer(TodosReducer, [])

    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}    
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export default TodosContext