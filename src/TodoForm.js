import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("")

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        reset()
    }

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullwidth />
            </form>
        </Paper>
    )
}
