
const Countrylist=({filteredCountry,handleShow})=><>
                               { filteredCountry.map((el)=>
                                  <div key={el.name}>
                                  {el.name} 
                                  <button onClick={handleShow} value={el.name}>show</button>
                                  </div>
                                )}
                                </>

export default Countrylist