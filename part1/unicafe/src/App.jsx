import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (score_add) => {
    switch(score_add){
      case 1:
        setGood(good + 1)
      break;
      case 0:
        setNeutral(neutral + 1)
      break;
      case -1:
        setBad(bad + 1)
      break;
    }
  }




  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <div>
        Statistics:
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
      </div>
    </div>
  )
}

export default App