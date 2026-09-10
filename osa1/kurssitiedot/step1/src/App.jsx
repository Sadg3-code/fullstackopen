const Header = (header) => {
  console.log(header)
  return (
    <div> 
      <p>
        {header.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        Part: {props.name} contains {props.exercises} exercises
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum,part) => sum + part.exercises, 0)
  console.log(total)
  return(
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
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
      <h1><Header course={course.name}/></h1>
      <Content parts = {course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App