const Header = ({course}) =>{
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts, exercises}) =>{
  console.log(parts, 'parts')
  return(
    <div>
      <Part name={parts[parts1]} exercises={exercises[0]} />
      <Part name={parts[1]} exercises={exercises[1]} />
      <Part name={parts[2]} exercises={exercises[2]} />
    </div>
  )
}

const Total = ({total}) =>{
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>{name} {exercises}</p>
  )
}


const App = () => {
  console.log("in App")
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 8
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 10

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )

  
}

export default App