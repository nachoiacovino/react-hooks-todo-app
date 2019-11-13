import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'

// import useTodoState from './hooks/useTodoState'

export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Do stuff", completed: false },
        { id: 2, task: "Do stuff bru", completed: true },
        { id: 3, task: "Yep yep", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => setTodos([...todos, {id: 4, task: newTodoText, completed: false}])

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
                    <TodoList todos={todos} />
                </Grid>
            </Grid>

        </Paper>
    )
}
