import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo =>
                    <>
                        <li>{todo.task}</li>
                        <Divider/>
                    </>
                )}
            </List>
        </Paper>
    )
}
