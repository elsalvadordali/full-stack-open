import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Country = ({result}) => {
    console.log(process.env.REACT_APP_API_KEY)
    const [weather, setWeather] = useState({})
    useEffect(() => {
        axios.get('http://api.weatherstack.com/current', {
            params: {
                access_key : process.env.REACT_APP_API_KEY,
                query : result.name.common
            }
        })
        .then((res) => res.data.error ? setWeather('error') : setWeather(res.data))
        
    }, [])
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
    const weatherData = () => {
        return (
            <>
                <h4>temperature {weather.current.temperature}</h4>
                <img src={weather.current.weather_icons[0]} />
                <h4>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</h4>
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
                {console.log(weather)}
                {(weather.current) ? weatherData() : 'no weather data'}
            </>
        )
    
       
    
}
export default Country