import React, {useState} from 'react'
import Country from './Country'

const ListItem = ({country}) => {
    const [show, setShow] = useState(null)
    const selectiveRender = () => {
        
    }
    console.log(country);
    
    if (show === null) {
        return (
            <li>{country.name.common + ' '}
            <button onClick={() => show === null ? setShow(country.cca2) : setShow(null)}>show</button>
            </li>
        )
    } 
    return (
        <li>{country.name.common + ' '}
        <button onClick={() => show === null ? setShow(country.cca2) : setShow(null)}>show</button>
        <Country result={country} />
        </li>
        )
    
}

export default ListItem