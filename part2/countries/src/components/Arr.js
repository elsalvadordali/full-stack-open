import React from 'react'
import ListItem from './ListItem'
import Country from './Country'


const Arr = ({countries}) => {
    
    console.log(countries)

    const fun = () => {
        console.log('hi')
    }
    if (countries.length > 10) return 'please narrow down your search'
    else if (countries.length === 1) return <Country result={countries[0]} />
    else if (countries.length < 1) return 'no such country'
    return  (
        
        <ul>  
            {countries.map(country => <ListItem key={country.cca2} country={country} /> )}
        </ul>
    )

}

export default Arr