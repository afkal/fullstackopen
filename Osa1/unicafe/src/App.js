import React, { useState } from 'react'


const Statistics = ({good, bad, neutral}) => {
  let all

  all = good + bad + neutral

  if (all > 0) {
    return (
    <div>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(-1*bad+good)/all}</div>
      <div>positive {100 * good / all} %</div>
    </div>
    )
  }

  return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>

  )
}

export default App
