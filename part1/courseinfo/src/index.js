import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  ) 
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.partNum.part} {props.partNum.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partNum = {props.content[0]} />
      <Part partNum = {props.content[1]} />
      <Part partNum = {props.content[2]} />
    </div>
  ) 
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}
      </p>
    </div>
  ) 
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))