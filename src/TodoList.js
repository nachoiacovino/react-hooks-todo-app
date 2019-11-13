import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo =>
                    <>
                        <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                        <Divider/>
                    </>
                )}
            </List>
        </Paper>
    )
}
