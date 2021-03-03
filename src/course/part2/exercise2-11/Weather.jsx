const Weather=({weather})=> 
                    <div>
                  <h1>Weather in {weather.location.name}</h1>
                  <p>Temperatures: {weather.current.temp_c}°c</p>
                  <img src={weather.current.condition.icon } alt="weather "/>
                  <p><b>wind:</b>{weather.current.wind_mph}mph direction {weather.current.wind_dir}</p>
                </div>
               
export default Weather
