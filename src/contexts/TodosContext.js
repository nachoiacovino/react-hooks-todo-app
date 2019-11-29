import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const TodosContext = createContext()

export const TodosProvider = props => {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]") 
    // const initialTodos = [
    //     { id: 1, task: "hello"},
    //     { id: 2, task: "omg"}
    // ]
    // const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(initialTodos)
    const todosStuff = useTodoState(initialTodos)
    
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContext
