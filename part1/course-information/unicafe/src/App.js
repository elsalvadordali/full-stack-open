
import React, { useState } from 'react'
import Statistics from './components/Statistics'
import StatisticLine from './components/StatisticLine'
import Button from './components/Button'

const App = () => {
  const [ good, setGood ] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good +1)} value='good' />
      <Button handleClick={() => setNeutral(neutral +1)} value='neutral' />
      <Button handleClick={() => setBad(bad +1)} value='bad' />
    <h2>statistics</h2>
      <table>
        
        <tbody>
        <StatisticLine type='good' value={good} />
        <StatisticLine type='neutral' value={neutral} />
        <StatisticLine type='bad' value={bad} />
        <tr><td>All:</td><td>{good + neutral + bad}</td></tr> 
        <Statistics good={good} bad={bad} neutral={neutral} />
        </tbody>
      </table>
    </div>
  )
}

export default App;
