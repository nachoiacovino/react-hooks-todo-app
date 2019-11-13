import { useState } from 'react'
import uuid from 'uuid/v4'

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos)

    return {
        todos,
        addTodo: newTodoText => setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]),
        removeTodo: todoId => setTodos(todos.filter(todo => todo.id !== todoId)),
        toggleTodo: todoId => setTodos(todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)),
        updateTodo: (todoId, newText) => setTodos(todos.map(todo => todo.id === todoId ? {...todo, task: newText} : todo))
    }
}