import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import TodosContext from './contexts/TodosContext.js'

export default ({ id, task, toggle }) => {
    const [value, handleChange] = useInputState(task)
    const { updateTodo } = useContext(TodosContext)

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
