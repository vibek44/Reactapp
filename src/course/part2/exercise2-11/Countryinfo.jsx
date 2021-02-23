const Countryinfo=({filteredCountry})=> <div> 
                                      {filteredCountry.map((el)=>
                                      <div key={el.name}>
                                        <h1 >{el.name}</h1>
                                        <p>capital: {el.capital}</p> 
                                        <p>population: {el.population}</p>     
                                        <h2>Languages</h2>
                                        {el.languages.map((language)=>
                                        <li key={language.name}>{language.name}</li>)}
                                         <img src={el.flag} alt='flag' width='100'/>
                                      </div>)}
                                    </div>

export default Countryinfo

