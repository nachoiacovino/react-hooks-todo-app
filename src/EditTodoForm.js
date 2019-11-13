import React from 'react'
import { TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'

export default function EditTodoForm({ id, task, updateTodo, toggle }) {
    const [value, handleChange] = useInputState(task)

    const handleEdit = e => {
        e.preventDefault()
        updateTodo(id, value)
        toggle()
    }

    return (
        <form onSubmit={handleEdit} style={{ marginLeft: "1rem", width: "50%" }}>
            <TextField autoFocus value={value} onChange={handleChange} margin="normal" />
        </form>
    )
}
