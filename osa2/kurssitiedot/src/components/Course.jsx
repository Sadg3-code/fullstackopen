const Header = (props) => {
  console.log(props.course)
  return <p>{props.course}</p>
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
  const parts = props.parts
  return(
    <div>
      {parts.map(part => 
        <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum,part) => sum + part.exercises, 0)
  console.log(total)
  return(
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h1><Header course={course.name}/></h1>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default Course