import React, { useState } from 'react'


const StatisticLine = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, bad, neutral}) => {
  let all

  all = good + bad + neutral

  if (all > 0) {
    return (
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={(-1*bad+good)/all} />
      <StatisticLine text="positive" value ={100 * good / all + ' %'} />
    </div>
    )
  }

  return (
      <div>
        <div>No feedback given</div>
      </div>
  )
}

const StatisticRow = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const StatisticsTable = ({good, bad, neutral}) => {
  let all

  all = good + bad + neutral

  if (all > 0) {
    return (
    <div>
      <table>
        <tbody>
          <StatisticRow text="good" value ={good} />
          <StatisticRow text="neutral" value ={neutral} />
          <StatisticRow text="bad" value ={bad} />
          <StatisticRow text="all" value ={all} />
          <StatisticRow text="average" value ={(-1*bad+good)/all} />
          <StatisticRow text="positive" value ={100 * good / all + ' %'} />
        </tbody>
      </table>
    </div>
    )
  }
  return (
      <div>
        <div>No feedback given</div>
      </div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="good"/>
      <h1>statistics</h1>
      <StatisticsTable good={good} bad={bad} neutral={neutral}/>
    </div>

  )
}

export default App
