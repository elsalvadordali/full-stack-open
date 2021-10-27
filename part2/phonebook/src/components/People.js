import React from 'react'
import Individual from './Individual'

const People = (props) => {
    return (
    <table>
        <tbody>
            {props.list.map(people => <Individual key={people.name} name={people.name} number={people.number} id={people.id} delPerson={props.delPerson(people.id, people.name)} />)}
        </tbody>
    </table>
    )
}

export default People