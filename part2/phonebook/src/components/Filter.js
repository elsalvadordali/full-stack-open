import React from 'react'

const Filter = (props) => {
    return (
        <p>filter shown with <input value={props.defaultValue} onChange={props.handleChange}/></p>
    )
}

export default Filter