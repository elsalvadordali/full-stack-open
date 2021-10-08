
import React, {useState} from 'react'
 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more ofter',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent',
    'Any fool can write code that a computer can understand. Good programmers write code that humans understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of control.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(Math.floor(Math.random() * 7))

  const updatePoints = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)
  }
  const calculateWinner = () => {
    let reducer = (prev, curr) => prev > curr ? prev: curr;
    let max = points.reduce(reducer)
    
    console.log(points.indexOf(max))
    return points.indexOf(max)
  }
  return (
    <div>
      <h4>{anecdotes[selected]}</h4>
      <p>{points.join(' ')} votes</p>
      <button onClick={() => updatePoints()}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <h4>Anecdote with most votes</h4>
      {anecdotes[calculateWinner()]}
    </div>
  )
}

export default App;
