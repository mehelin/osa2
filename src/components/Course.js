import React from 'react'

// harkka 2.4
const Course = ({ courses }) => { 
  console.log(courses)
  return (
    <div>
      <Header courses={courses} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts}></Total>
    </div>
  )
}

  const Header = ({ courses }) => {
    return (
      <h1>{courses.name}</h1>
    )
  }
  
  // harkka 2.3
  const Total = ({ parts }) => {
     const total = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part)
    return sum + part.exercises
  }, 0)
  return (
    <div>
  <p><b>Total of {total} exercises</b></p>
  </div>
  )
  
  }

// harkka 2.1
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
 
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
 
export default Course