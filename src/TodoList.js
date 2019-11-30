import React, { useContext } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'
import TodosContext from './contexts/TodosContext.js'

export default props => {
    const todos = useContext(TodosContext)

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        <React.Fragment key={i}>
                            <Todo key={todo.id} {...todo} />
                            {i < todos.length - 1 && <Divider/>}
                        </React.Fragment>
                    )}
                </List>
            </Paper>
        )
    return (
        <Paper style={{ padding: "1rem"}}>
                You don't have any Todos yet, you should add one!
        </Paper>
    )
}
