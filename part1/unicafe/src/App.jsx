import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  
  const calcPositive = () => { 
    console.log("All in setPOsitive", all)
    good/all*100
  }
  
  const handleGoodClick = () => {
    const newGood = good + 1;
    const newAll = all + 1;
    setGood(newGood)
    setAll(newAll)
    setPositive(newGood/newAll*100)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    const newAll = all + 1;
    setAll(newAll)
    setPositive(good/newAll*100)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    const newAll = all + 1;
    setAll(newAll)
    setPositive(good/newAll*100)
  }



  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <div>
        Statistics:
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>All: {all}</div>
        <div>Positive: {positive}%</div>
        <div>All: {all}</div>
      </div>
    </div>
  )
}

export default App