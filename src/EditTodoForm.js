import React from 'react'
import { TextField, Button } from '@material-ui/core'
import useInputState from './hooks/useInputState'

export default function EditTodoForm({ id, task, updateTodo, toggle }) {
    const [value, handleChange] = useInputState(task)

    const handleEdit = e => {
        updateTodo(id, value)
        toggle()
    }

    return (
        <>
            <TextField value={value} onChange={handleChange} />
            <Button onClick={handleEdit} variant="contained" color="primary">Edit</Button>
        </>
    )
}
