import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'
import Countryinfo from './Countryinfo'
import Countrylist from './Countrylist'

const App=()=>{
    
    const[countries,setCountries]=useState([])

    const[searchcountry,setSearch]=useState('')

    const[weather,setWeather]=useState({})

    const filteredCountry=countries.filter(
                     (country)=>country.name.toUpperCase().includes(searchcountry.toUpperCase()) ) 

    const  filteredCapital=filteredCountry.map((el)=>el.capital)

      
    useEffect(()=> {
       axios.get( 'https://restcountries.eu/rest/v2/all')
                          .then((response)=>setCountries(response.data))
                           },[])
 
    useEffect(()=> {
        if(filteredCapital[0]!==undefined) {
           axios.get( `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${filteredCapital[0]}`)
            .then(response=>setWeather(response.data))
               }  },[searchcountry]) 
   
    const handleSearch=(e)=>setSearch(e.target.value)
     
    const handleShow =(e)=>setSearch(e.target.value)
     
    return(<div>
             find countries:<input type='text' value={searchcountry} onChange={handleSearch}/>
            {
              ( filteredCountry.length>10 ? 
                <p>Too many matches,specify another filter</p>:
                ( filteredCountry.length===1 ? 
                 <div>
                 <Countryinfo filteredCountry={filteredCountry} />
                 <Weather weather={weather}/>
                 </div> :
                 <Countrylist filteredCountry={filteredCountry} handleShow={handleShow}/>
                 )
              )
            }
          </div>)
}

export default App

