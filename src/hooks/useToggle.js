import { useState } from 'react'

export default (initialVal = false) => {
    const [state, setState] = useState(initialVal)
    const toggle = _ => setState(!state)
    
    return [state, toggle]
}