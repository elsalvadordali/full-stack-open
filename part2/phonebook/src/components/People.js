import React from 'react'
import Individual from './Individual'
const People = ({list}) => {
    console.log(list)
    return (
    <table>
        <tbody>
            {list.map(people => <Individual key={people.name} name={people.name} number={people.number} />)}
        </tbody>
    </table>
    )
}

export default People