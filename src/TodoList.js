import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        <React.Fragment key={i}>
                            <Todo key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} />
                            {i < todos.length - 1 && <Divider/> }
                        </React.Fragment>
                    )}
                </List>
            </Paper>
        )
    return (
        <Paper style={{ padding: "1rem"}}>
                You don't have any Todos yet, you should add one!
        </Paper>)
}
