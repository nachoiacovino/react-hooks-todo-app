import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo =>
                    <>
                        <Todo key={todo.id} task={todo.task} completed={todo.completed} />
                        <Divider/>
                    </>
                )}
            </List>
        </Paper>
    )
}
