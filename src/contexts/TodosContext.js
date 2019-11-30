import React, { useReducer, createContext } from 'react'
// import useTodoState from '../hooks/useTodoState'
import TodosReducer from '../reducers/TodosReducer'

const TodosContext = createContext()

export const TodosProvider = props => {
    const [todos, dispatch] = useReducer(TodosReducer, [])
    // const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(initialTodos)
    // const todosStuff = useTodoState([])
    
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContext