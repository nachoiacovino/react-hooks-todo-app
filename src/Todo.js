import React, { useContext } from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import useToggle from './hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import TodosContext from './contexts/TodosContext.js'

export default ({ id, task, completed }) => {
    const [isEditing, toggle] = useToggle()
    const { removeTodo, toggleTodo } = useContext(TodosContext)
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? <EditTodoForm id={id} task={task} toggle={toggle} />
            : 
            <>
                <Checkbox onClick={() => toggleTodo(id)} checked={completed} tabIndex={-1} />
                <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <Edit />
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}
