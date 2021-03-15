import React, { useState, useEffect } from 'react'
import './css/input.css'

const Input = (props) => {
    const [value, setValue] = useState('')
    const inputListener = (e) => {
        setValue(parseFloat(e.target.value))
    }
    useEffect(() => {
        props.values(value)
    }, [value])
    return (
        <>
            <label>
                <h3>{props.desc}</h3>
                <input type="number" placeholder={props.placeholder} value={value} onChange={inputListener} />
            </label>
        </>
    )
}

export default Input