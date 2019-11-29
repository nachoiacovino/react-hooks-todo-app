import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const TodosContext = createContext()

export const TodosProvider = props => {
    // const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(initialTodos)
    const todosStuff = useTodoState([])
    
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContext
