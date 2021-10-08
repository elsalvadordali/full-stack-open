import React from 'react'
import Header from './components/Header.js'
import Content from './components/Content.js'
import Total from './components/Total.js'
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using Props to pass data',
        exercises: 7
      },
      { 
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content p1={course.parts[0].name} e1={course.parts[0].exercises} p2={course.parts[1].name} e2={course.parts[1].exercises} p3={course.parts[2].name} e3={course.parts[2].exercises} />

      <Total tot={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App