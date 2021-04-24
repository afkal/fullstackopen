import React, { useState } from 'react'

const Button = ({handkleClick, text}) => <button onClick={handkleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [maxVotes, setMax] = useState(0)

  const randomizeAnecdote = () => {
    let rand = Math.floor(Math.random() * 6);
    setSelected(rand)
  }

  const setVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    var max = votes.reduce(function(a, b) {
      return Math.max(a, b);
    });
    if(copy[selected] >= max) {
      setMax(selected)
    }
    console.log('Max', max)
    setVotes(copy)
  }

  console.log('Selected', selected);
  console.log('Votes', votes)
  console.log('Max votes', maxVotes)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Button handkleClick = {setVote} text = "vote"/>
      <Button handkleClick = {randomizeAnecdote} text = "next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxVotes]}</div>
      <div>has {votes[maxVotes]} votes</div>
    </div>
  )
}

export default App
