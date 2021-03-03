import React, { useState }  from 'react'
import ReactDOM from 'react-dom' 
                          

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
      <button onClick={handleGoodbutton} >good</button>
      < button onClick={handleNeutralbutton} >neutral</button>
      < button onClick={handleBadbutton} >bad</button>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>Average { (good!==0 || neutral !==0 || bad !==0) && (good-bad)/(good+neutral+bad) } </p>
      <p>Positive { (good!==0 || neutral !==0 || bad !==0) && (good/(good+neutral+bad))*100} %</p>
     </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)