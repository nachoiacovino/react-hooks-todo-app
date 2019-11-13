import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
    return (
        <ListItem>
            <Checkbox onClick={() => toggleTodo(id)} checked={completed} tabIndex={-1} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
