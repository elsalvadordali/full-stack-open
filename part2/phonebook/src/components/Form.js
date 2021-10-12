import React from 'react'

const Input = (props) => {
    console.log(props)
    
    return (
        <>
            <div>name: <input value={props.newName} onChange={props.handlePerson} /></div>
            <div>number: <input value={props.newNumber} onChange={props.handleNumber} /></div>
            <div><button type="submit" onClick={props.handleClick}>add</button></div>
        </>
    )
}

export default Input