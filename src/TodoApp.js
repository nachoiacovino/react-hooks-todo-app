import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'

// import useTodoState from './hooks/useTodoState'

export default function TodoApp() {
    const initialTodos = [
        { id: uuid(), task: "Do stuff", completed: false },
        { id: uuid(), task: "Do stuff bru", completed: true },
        { id: uuid(), task: "Yep yep", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    const removeTodo = todoId => setTodos(todos.filter(todo => todo.id !== todoId))
    const toggleTodo = todoId => setTodos(todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo))
    const updateTodo = (todoId, newText) => setTodos(todos.map(todo => todo.id === todoId ? {...todo, task: newText} : todo))

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} />
                </Grid>
            </Grid>

        </Paper>
    )
}
