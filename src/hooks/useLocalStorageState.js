import { useState, useEffect } from 'react'

export default (key, initialVal) => {
    const [state, setState] = useState(() => {
        try {
            return JSON.parse(window.localStorage.getItem(key) || String(initialVal))
        } catch (e) {
            return initialVal
        }
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return [state, setState]
}