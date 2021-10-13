import React from 'react'
const Country = ({result}) => {
    console.log(result.name.official)
    const languages = (languages) => {
        let arr = Object.values(languages)
        if (arr.length === 1) return (<><h2>language</h2><p>{arr[0]}</p></>)
        return (
            <>
                <h2>languages</h2>
                {arr.map(ech => <p key={ech}>{ech}</p>)}
            </>
        )
    }
    
        return (
            <>
                <h1>{result.name.common}</h1>
                {result.capital.length === 1 ? <p>capital {result.capital}</p> : 'capitals' + result.capital.map(city => <p>{city}</p>)}
                <p>population {result.population}</p>
                {languages(result.languages)}
                <img src={result.flags.png} />
            </>
        )
    
       
    
}
export default Country