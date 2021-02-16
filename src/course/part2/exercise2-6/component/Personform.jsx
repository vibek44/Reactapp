const Personform=(props)=> 
                        <form onSubmit={props.addPerson}>
                        <div>
                        Name: <input   value={props.newName} 
                        onChange={props.handlePersonInput} />
                        </div>
                        <div>
                        Number: <input  type="number" 
                         value={props.newNumber} 
                         onChange={props.handlePersonNumber} />
                        </div>
                        <div>
                        <button type="submit"  >add</button>
                        </div>
                        </form>

export default Personform