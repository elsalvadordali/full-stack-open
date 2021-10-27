import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Country from './components/Country'
import Arr from './components/Arr'
function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const filterCountries = (e) => {
    setSearch(e.target.value)
    const result = countries.filter(country => country.name.common.toUpperCase().includes(search.toUpperCase()))
    setResults(result)
  }
  return (
    <div className="App">
      <input value={search} onChange={(filterCountries)} />
      <Arr countries={results} />
    </div>
  );
}

export default App;


//REACT_APP_API_KEY='16b133d7f0f607f6f42861a5d867a3d8' npm start