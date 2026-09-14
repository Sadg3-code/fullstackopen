import { useState } from 'react'


const Statistics = (stats) => {
  if (stats.total === 0) {
    return(<div>No Feedback Given</div>)
  }
  return(
    <table>
      <tbody>
      <StatisticLine text = "good" value = {stats.good}/>
      <StatisticLine text = "neutral" value = {stats.neutral}/>
      <StatisticLine text = "bad" value = {stats.bad}/>
      <StatisticLine text = "average" value = {(stats.good-stats.bad)/stats.averageTotal}/>
      <StatisticLine text = "positive" value = {((stats.good/stats.total) * 100) + " %"}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) =>{
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [averageTotal, setAverageTotal] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    setAverageTotal(updatedGood + bad)
    console.log(good)
  }

    const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log(bad)
    setTotal(good + neutral + updatedBad)
    setAverageTotal(good + updatedBad)
  }

    const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log(neutral)
    setTotal(good + updatedNeutral + bad)
  }

  return (
    <div>
      <h1>give feedback </h1>
      <Button onClick = {handleGood} text = 'good'/>
      <Button onClick = {handleNeutral} text = 'neutral'/>
      <Button onClick = {handleBad} text = 'bad'/>
      <h1>statistics </h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}
       total = {total} averageTotal = {averageTotal}></Statistics>
    </div>
  )
}

export default App