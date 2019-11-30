import React, { useContext } from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/TodosContext.js'

export default props => {
    const [value, handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD', task: value })
        reset()
    }

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo"/>
            </form>
        </Paper>
    )
}
