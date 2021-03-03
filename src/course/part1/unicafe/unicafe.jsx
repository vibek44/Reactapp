import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=(props)=> <button onClick={props.onClick}>{props.text}</button>
         


const Statistic=(props)=>{  if(isNaN(props.value)){
                                  return(<tr><td>{props.text} :</td></tr>)
                                    }
                         return(
                                <tr>
                                <td>{props.text}</td>
                                <td> {props.value}</td>
                                </tr>
                               )
                              }
                                          
                          

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
      <Button  text="good"     onClick={handleGoodbutton} />
      <Button text ="neutral"  onClick={handleNeutralbutton} />
      <Button  text ="bad"     onClick={handleBadbutton} />
      <h2>Statistics</h2>
      <table><tbody>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="All"  value={good+neutral+bad} />
      <Statistic text="Average" value={(good-bad)/(good+neutral+bad)} />
      <Statistic text="Positive" value={(good/(good+neutral+bad))*100} />
      </tbody></table>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)