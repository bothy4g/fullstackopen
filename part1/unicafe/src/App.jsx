import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton'
import Statistics from './components/Statistics'
import Button from './components/Button'

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
    setAverage((newGood - bad)/newAll)
  }
  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAll = all + 1;
    setAll(newAll)
    setPositive(good/newAll*100)
    setAverage((good-newBad)/newAll)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    const newAll = all + 1;
    setAll(newAll)
    setPositive((good)/newAll*100)
  }



  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>

      <Statistics good={good} neutral={neutral} bad={bad}  all={all} positive={positive} average={average}/>
      
    </div>
  )
}

export default App