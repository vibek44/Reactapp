import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics=({good,neutral,bad})=>{ 
                           return(<><p>Good {good}</p>
                            <p>neutral {neutral}</p>
                            <p>Good {bad}</p>
                            <p>All {good+neutral+bad}</p>
                            <p>Average  {(good-bad)/(good+neutral+bad)}</p>
                            <p>Positive  {(good/(good+neutral+bad))*100}%</p></>)}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodbutton=()=>setGood(good+1)

  const handleNeutralbutton=()=>setNeutral(neutral+1)

  const handleBadbutton=()=>setBad(bad+1)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodbutton}>Good</button>
      <button onClick={handleNeutralbutton}>Neutral</button>
      <button onClick={handleBadbutton}> Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)