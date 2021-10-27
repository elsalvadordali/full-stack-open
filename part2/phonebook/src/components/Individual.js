import React from 'react'
const Individual = (props) => {
    return <tr><td>{props.name}</td><td>{props.number}</td><td><button onClick={() => props.delPerson(props.id, props.name)}>Delete</button></td></tr>
}

export default Individual