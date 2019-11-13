import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

export default function Todo({ task, completed }) {
    return (
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete">
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
